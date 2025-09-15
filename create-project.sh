#!/bin/bash

# Usage: ./create-project.sh "category" "project-name" "Project Title" "Description"

CATEGORY=$1
PROJECT_NAME=$2
PROJECT_TITLE=$3
DESCRIPTION=$4
DATE=$(date +"%Y-%m-%d")

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Validation
if [ -z "$CATEGORY" ] || [ -z "$PROJECT_NAME" ] || [ -z "$PROJECT_TITLE" ] || [ -z "$DESCRIPTION" ]; then
    echo -e "${RED}❌ Error: Missing required arguments${NC}"
    echo "Usage: ./create-project.sh \"category\" \"project-name\" \"Project Title\" \"Description\""
    echo "Example: ./create-project.sh \"01-fundamentals\" \"project-01-variables\" \"Variables and Constants\" \"Learning JavaScript variables\""
    exit 1
fi

echo -e "${BLUE}🚀 Creating new project...${NC}"

# Create category if it doesn't exist
mkdir -p "$CATEGORY"
echo -e "${GREEN}✅ Category folder: $CATEGORY${NC}"

# Create project folder
PROJECT_PATH="$CATEGORY/$PROJECT_NAME"
mkdir -p "$PROJECT_PATH"

# Create subdirectories
mkdir -p "$PROJECT_PATH/scripts"
mkdir -p "$PROJECT_PATH/styles"

# Copy template files
cp templates/project-template/index.html "$PROJECT_PATH/"
cp templates/project-template/README.md "$PROJECT_PATH/"
cp templates/project-template/.prettierrc "$PROJECT_PATH/"
cp templates/project-template/scripts/main.js "$PROJECT_PATH/scripts/"
cp templates/project-template/styles/main.css "$PROJECT_PATH/styles/"

echo -e "${GREEN}✅ Template files copied${NC}"

# Replace placeholders in all files
find "$PROJECT_PATH" -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" \) -exec sed -i.bak "s/PROJECT_TITLE/$PROJECT_TITLE/g" {} \;
find "$PROJECT_PATH" -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" \) -exec sed -i.bak "s/TOPIC_DESCRIPTION/$DESCRIPTION/g" {} \;
find "$PROJECT_PATH" -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" \) -exec sed -i.bak "s/PROJECT_DATE/$DATE/g" {} \;

# Clean up backup files
find "$PROJECT_PATH" -name "*.bak" -delete

echo -e "${GREEN}✅ Placeholders replaced${NC}"

# Format files with Prettier if available
if command -v prettier &> /dev/null; then
    echo -e "${BLUE}🎨 Formatting files with Prettier...${NC}"
    prettier --write "$PROJECT_PATH/**/*.{html,js,css,md}" 2>/dev/null || echo -e "${YELLOW}⚠️  Prettier formatting skipped${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Project created successfully!${NC}"
echo -e "${BLUE}📁 Location: $PROJECT_PATH${NC}"
echo -e "${BLUE}🎯 Title: $PROJECT_TITLE${NC}"
echo -e "${BLUE}📝 Description: $DESCRIPTION${NC}"
echo -e "${BLUE}📅 Date: $DATE${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. cd $PROJECT_PATH"
echo "2. code . (to open in VSCode)"
echo "3. Start coding in scripts/main.js"
echo "4. Open index.html with Live Server"
echo "5. git add . && git commit -m \"feat: start $PROJECT_NAME\""