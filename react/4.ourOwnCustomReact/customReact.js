const mainContainer  = document.querySelector('#root')

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : 'blank'
    },
    content : 'click on me to navigate to google page'
}

customRender(reactElement,mainContainer)

