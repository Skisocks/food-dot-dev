# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
# Start local development server (with live reload)
hugo server

# Build for production
hugo --gc --minify

# Create a new recipe
hugo new recipes/recipe-name.md
```

## Architecture

This is a Hugo static site for a recipe database, deployed to GitHub Pages via `.github/workflows/hugo.yaml`.

### Content Structure

- `content/recipes/` - Recipe markdown files with frontmatter for metadata
- `archetypes/recipes.md` - Template for new recipes (used by `hugo new`)

### Recipe Frontmatter Schema

Recipes use these frontmatter fields:
- `categories`, `cuisines`, `tags` - Taxonomies for organization
- `prepTime`, `cookTime` - Duration strings (e.g., "15 min")
- `servings` - Number
- `difficulty` - "Easy", "Medium", "Hard"
- `featured_image` - Optional image path

### Layouts

- `layouts/recipes/single.html` - Individual recipe page
- `layouts/recipes/list.html` - Recipe listing page
- `layouts/_default/taxonomy.html` - Category/cuisine/tag listing
- `layouts/partials/` - Site header, footer, navigation
- `assets/css/` - Stylesheets

### Configuration

`hugo.toml` defines:
- Custom taxonomies: categories, tags, cuisines
- Main menu navigation
- Site metadata