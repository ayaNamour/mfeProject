import React from 'react';
import  { createRoot }  from 'react-dom/client';
import App from './App'

import {createMemoryHistory , createBrowserHistory} from 'history';


const mount = (el,{onNavigate , defaultHistory , initialPath}) =>{
  
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });

    if(onNavigate){
        history.listen(onNavigate);
    }
    const root = createRoot(el);
    root.render(
        <App history={history}/>
    );

    return {
        onParentNavigate( {pathname : nextPathname}){
            const {pathname} = history.location;

            if(pathname !== nextPathname){
                history.push(nextPathname);
            }

        }
    }
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_marketing-dev-root")
    if(devRoot){
        mount(devRoot,{ defaultHistory: createBrowserHistory()});
    }
}

export {mount};