function ScrollToRegistries() {
    console.log('ss');
    document.getElementsByClassName('registries_top')[0].scrollIntoView();    
}

function ScrollToNews() {
    document.getElementsByClassName('registries_top_news')[0].scrollIntoView();    
}

function ScrollToDocuments() {
    document.getElementsByClassName('documents__top')[0].scrollIntoView();    
}

function ScrollToQuestions() {
    document.getElementsByClassName('questions')[0].scrollIntoView();    
}

export default {ScrollToRegistries, ScrollToNews, ScrollToDocuments, ScrollToQuestions};