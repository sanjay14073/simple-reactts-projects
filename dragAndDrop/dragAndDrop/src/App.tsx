import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import { useState,useEffect } from 'react';
import plugin from 'grapesjs-preset-webpage';
import plugin1 from 'grapesjs-preset-newsletter';
import plugin2 from 'grapesjs-navbar';
import thePlugin from 'grapesjs-plugin-export';
import plugin3 from 'grapesjs-tui-image-editor';
import gjsForms from 'grapesjs-plugin-forms';
import pluginCountdown from 'grapesjs-component-countdown';
import plugin4 from 'grapesjs-style-gradient';
import grapesjsTouch from 'grapesjs-touch';
import customCodePlugin from 'grapesjs-custom-code';
import pluginTab from 'grapesjs-tabs';
import pluginIndexdb from 'grapesjs-indexeddb';

import pluginSuggestClasses from '@silexlabs/grapesjs-ui-suggest-classes';

import './index.css';
function App() {
  const [editor,setEditor]=useState(null)
  useEffect(()=>{
    const editor = grapesjs.init({
      container: '#editor',
      plugins:[plugin1,plugin,plugin2,thePlugin,plugin3,gjsForms,pluginCountdown,plugin4,grapesjsTouch,customCodePlugin,pluginTab,pluginIndexdb,pluginSuggestClasses],
      pluginsOpts:{
        plugin1,
        plugin,
        plugin2,
        plugin3,
        thePlugin,
        gjsForms,
        pluginCountdown,
        plugin4,
        grapesjsTouch,
        customCodePlugin,
        pluginTab,
        pluginIndexdb,
        pluginSuggestClasses
      }
    });
    setEditor(editor)
  },[])
  return (
    <>
    <div className='main'>
      <div id="editor"></div>
    </div>
    </>
  )
}

export default App
