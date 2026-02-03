export interface SearchEngine {
  id: string
  name: string
  displayName: string
  searchUrl: string
  placeholder: string
  buttonText: string
  snarkyMessages: string[]
  colors: {
    primary: string
    hover: string
    background?: string
    text?: string
    border?: string
  }
  logo?: string
}

export const useSearchEngines = () => {
  const engines: SearchEngine[] = [
    {
      id: 'google',
      name: 'Google',
      displayName: 'Google',
      searchUrl: 'https://www.google.com/search?q=',
      placeholder: 'Search Google or type a URL',
      buttonText: 'Google Search',
      snarkyMessages: [
        'Was that so hard?',
        'Next time, just type it in yourself.',
        'I bet you can do this on your own next time.',
        'See? You could have done this yourself.',
        'Maybe try searching yourself next time?',
        'That took you longer than just searching it yourself.',
        'Now do it yourself next time!'
      ],
      colors: {
        primary: '#4285f4',
        hover: '#357ae8',
        background: '#ffffff',
        text: '#202124',
        border: '#dfe1e5'
      }
    },
    {
      id: 'bing',
      name: 'Bing',
      displayName: 'Bing',
      searchUrl: 'https://www.bing.com/search?q=',
      placeholder: 'Search the web',
      buttonText: 'Search',
      snarkyMessages: [
        'You could have just typed that yourself.',
        'Next time, do your own searching.',
        'Was asking someone really faster than this?',
        'You just watched me do what you could have done.',
        'Try doing this yourself next time.',
        'That\'s literally all you had to do.'
      ],
      colors: {
        primary: '#0078d4',
        hover: '#106ebe',
        background: '#ffffff',
        text: '#000000',
        border: '#e5e5e5'
      }
    },
    {
      id: 'duckduckgo',
      name: 'DuckDuckGo',
      displayName: 'DuckDuckGo',
      searchUrl: 'https://duckduckgo.com/?q=',
      placeholder: 'Search the web without being tracked',
      buttonText: 'S',
      snarkyMessages: [
        'You could have searched that yourself.',
        'Next time, try typing it in the search bar yourself.',
        'See how easy it is? Do it yourself next time.',
        'Was that too difficult to do on your own?',
        'You just made me do what you could have done.',
        'Try using a search engine yourself next time.'
      ],
      colors: {
        primary: '#de5833',
        hover: '#c74d2c',
        background: '#ffffff',
        text: '#333333',
        border: '#d0d0d0'
      }
    },
    {
      id: 'ecosia',
      name: 'Ecosia',
      displayName: 'Ecosia',
      searchUrl: 'https://www.ecosia.org/search?q=',
      placeholder: 'Search and plant trees',
      buttonText: 'Search',
      snarkyMessages: [
        'You could have planted trees by searching yourself.',
        'Next time, search it yourself and help plant trees!',
        'That\'s all you had to do. Try it yourself next time.',
        'Was typing in a search bar really that hard?',
        'You just watched what you could have done yourself.',
        'Do your own searches next time!'
      ],
      colors: {
        primary: '#56b68b',
        hover: '#4a9d77',
        background: '#ffffff',
        text: '#222222',
        border: '#d0d0d0'
      }
    },
    {
      id: 'yahoo',
      name: 'Yahoo',
      displayName: 'Yahoo',
      searchUrl: 'https://search.yahoo.com/search?p=',
      placeholder: 'Search the web',
      buttonText: 'Search',
      snarkyMessages: [
        'Yahoo! You could have done that yourself.',
        'Next time, search it on your own.',
        'You just made me do your searching for you.',
        'Was clicking a search button too much work?',
        'Try searching yourself next time.',
        'That\'s all you needed to do!'
      ],
      colors: {
        primary: '#5f01d1',
        hover: '#4a00a8',
        background: '#ffffff',
        text: '#000000',
        border: '#d0d0d0'
      }
    },
    {
      id: 'startpage',
      name: 'Startpage',
      displayName: 'Startpage',
      searchUrl: 'https://www.startpage.com/do/search?q=',
      placeholder: 'Search privately',
      buttonText: 'Search',
      snarkyMessages: [
        'Private searching isn\'t hard to do yourself.',
        'Next time, protect your privacy by searching yourself.',
        'You could have done this privately on your own.',
        'Was searching privately too complicated?',
        'Try using Startpage yourself next time.',
        'That\'s how easy private searching is!'
      ],
      colors: {
        primary: '#1a73e8',
        hover: '#1557b0',
        background: '#ffffff',
        text: '#000000',
        border: '#d0d0d0'
      }
    }
  ]

  const getEngineById = (id: string): SearchEngine | undefined => {
    return engines.find(e => e.id === id)
  }

  const getRandomSnarkyMessage = (engineId: string): string => {
    const engine = getEngineById(engineId)
    if (!engine || !engine.snarkyMessages.length) return 'Was that so hard?'
    
    const randomIndex = Math.floor(Math.random() * engine.snarkyMessages.length)
    return engine.snarkyMessages[randomIndex]
  }
  
  return {
    engines,
    getEngineById,
    getRandomSnarkyMessage
  }
}
