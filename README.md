# DevCareer Team Task

- [figma design](https://www.figma.com/file/ugDNCkXwZ3gyDkI3ovopp8/My-artelab?type=design&node-id=737-4628&mode=design&t=7g9zLKh8PIT41pIW-0)

## Importing the git repo for collaboration

- ### first clone the repo

```bash
git clone https://github.com/that-loui/Dev-Career-Group-14.git
```
- ### Branches
**DEV**
**MAIN**

- ### Collaboration
1. Clone the repo `git clone clone https://github.com/that-loui/Dev-Career-Group-14.git`
2. checkout to the dev branch `git checkout dev`
3. Create a your own branch  eg  `git checkout -b about-tablet`
4. add your changes, do `git add .`
5. Commit your changes with a clear message : `git commit -m "your commit message"`.
**ensure you commit your changes to avoid conflict**
6. Pull from the dev branch before you push to avoid conflict, run `git pull origin dev`.
7. Push your new branch, run `git push -u origin Feat/auth`.
8. Create a pull request to the `dev` branch not `main`

# Merging
Don't merge your branch yourself

# File structure 
There are three folders
- **root**
- **scss**
- **styles**

## root folder
This contains all the html content i.e all the html files for the project

## scss folder
This contains all the scss folders using the 7-1 architecture
- *Components* this folder contains the styles for the header and footer which are shared in all pages
- *Pages* this folder contains The styles for individual pages  
- *Reset* this folder contains The styles for style reset 
- *Screens* this folder contains The styles for the different screens sizes.

**note** **we are building mobile first so other screen sizes should contain their respect media queries *i have included them* The mobile css can be in the index.scss folder**
- *styles* this folder contains the root folder for the index.scss and style.css
**note** **I'm not sure how your compliers work so when you have styled your various pages please add you css files to the `gitIgnore file` so it doesn't clash**

