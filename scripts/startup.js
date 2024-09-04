class App {
    static consts = {
        current: 'ptbr',
        ptbr: {
            title: "Scarlet Victoria",
            subtitle: "Blog técnico",
            blog: "Blog",
            about: "Sobre",
            rss: "RSS",
            newsletter: "Newsletter",
            searchPlaceholder: "Pesquise por algo...",
            themeText: "Mudar para tema",
            languageText: "Mudar para linguagem"
        },
        enus: {
            title: "Scarlet Victoria",
            subtitle: "Technical blog",
            blog: "Blog",
            about: "About",
            rss: "RSS",
            newsletter: "Newsletter",
            searchPlaceholder: "Type and enter...",
            themeText: "Change to theme",
            languageText: "Change to language"
        }
    }

    static theme = {
        current: 'light',
        light: {
            primary: '#23272a',
            secondary: '#ffffff',
            borders: '#e8e9ed',
            primaryAlternative: '#5e6870'
        },
        dark: {
            primary: '#e8e9ed',
            secondary: '#23272a',
            borders: '#ffffff',
            primaryAlternative: '#5e6870'
        }
    }

    static currentPageContent = [];
    static pageContent = [];

    static toggleTheme() {
        this.theme.current = this.theme.current === 'light' ? 'dark' : 'light';
    }

    static toggleLanguage() {
        this.consts.current = this.consts.current === 'ptbr' ? 'enus' : 'ptbr';
    }
}

function updatePageContent() {
    document.title = App.consts[App.consts.current].title;

    App.pageContent.length = 0;

    App.pageContent.push(
        Navbar(
            Title(App.consts[App.consts.current].title),
            NavButtons({
                [App.consts[App.consts.current].blog]: [
                    0, 
                    'Navigation.goTo(`blog`)', 
                    App.consts[App.consts.current].blog
                ],
                [App.consts[App.consts.current].about]: [
                    1, 
                    'Navigation.goTo(`about`)',
                    App.consts[App.consts.current].about
                ],
                [App.consts[App.consts.current].rss]: [
                    2, 
                    'Navigation.goTo(`rss`)',
                    App.consts[App.consts.current].rss
                ],
                [App.consts[App.consts.current].newsletter]: [
                    3, 
                    'Navigation.goTo(`newsletter`)',
                    App.consts[App.consts.current].newsletter
                ],
                [App.theme.current === 'light' ? "🌙" : "☀️"]: [
                    4, 
                    'App.toggleTheme()',
                    `${App.consts[App.consts.current].themeText} ${App.theme.current === 'light' ? "dark" : "light"}`
                ],
                ["🌎"]: [
                    5, 
                    'App.toggleLanguage()',
                    `${App.consts[App.consts.current].languageText} ${App.consts.current === 'ptbr' ? "english" : "brasileira"}`
                ],
                ["💻"]: [
                    6,
                    'window.open(`https://github.com/somecodingwitch`)',
                    'GitHub'
                ],
                ["🦋"]: [
                    7,
                    'window.open(`https://bsky.app/profile/scarletrose.xyz`)',
                    'BlueSky'
                ],
            })
        )
    );

    const currentTextContent = App.currentPageContent.toString();
    const newTextContent = App.pageContent.toString();

    if (currentTextContent != newTextContent) {
        App.currentPageContent = App.pageContent.map(x => x);
        document.body.innerHTML = newTextContent;
    }
}

updatePageContent();
setInterval(updatePageContent, 10);