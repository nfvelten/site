#!/usr/bin/env bash
# sync.sh — copia notas públicas do vault para o site
# Uso: ./sync.sh          (sync + commit + push)
#      ./sync.sh --dry    (só mostra o que seria copiado)

set -euo pipefail

VAULT="$HOME/amphora/Public"
SITE="$HOME/code/site"
POSTS_SRC="$VAULT/posts"
LEITURAS_SRC="$VAULT/leituras"
POSTS_DST="$SITE/src/content/posts"
LEITURAS_DST="$SITE/src/content/leituras"

DRY=false
[[ "${1:-}" == "--dry" ]] && DRY=true

sync_dir() {
  local src="$1" dst="$2" label="$3"
  if [ ! -d "$src" ]; then
    echo "⚠  $label: pasta não encontrada ($src), pulando"
    return
  fi
  if $DRY; then
    echo "→ $label: $(ls "$src"/*.md 2>/dev/null | wc -l) arquivo(s)"
    ls "$src"/*.md 2>/dev/null || true
  else
    mkdir -p "$dst"
    rsync -av --delete --include="*.md" --exclude="*" "$src/" "$dst/"
    echo "✓ $label sincronizado"
  fi
}

echo "── Sync vault → site ──────────────────────"
sync_dir "$POSTS_SRC"    "$POSTS_DST"    "posts"
sync_dir "$LEITURAS_SRC" "$LEITURAS_DST" "leituras"

if $DRY; then
  echo "── Dry run concluído (nenhuma alteração feita)"
  exit 0
fi

echo "── Deploy ─────────────────────────────────"
cd "$SITE"
git add -A
if git diff --cached --quiet; then
  echo "Nenhuma alteração para publicar."
else
  git commit -m "publish: $(date '+%d-%m-%Y %H:%M')"
  git push
  echo "✓ Publicado — Vercel vai detectar o push e fazer o build"
fi
