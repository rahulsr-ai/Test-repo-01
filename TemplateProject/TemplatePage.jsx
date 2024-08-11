import React from 'react';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import EightacademyProject from './TamplatePages/EightacademyProject';

import TemplateHero from './TemplateHero';
import FAQ from './TamplatePages/FAQ';
import TemplateAbout from './TamplatePages/About';
import Features from './TamplatePages/Features';


const TemplatePage = () => {

    const templatepage = createBrowserRouter(

        // createRoutesFromElements(
        //     <Route element={<EightacademyProject />}>
        //         <Route index element={<TemplateHero />} />
        //         <Route path="About" element={<TemplateAbout/>} />
        //         <Route path="Features" element={<Features/>} />
        //         <Route path="FAQ" element={<FAQ />} />
        //     </Route>
        // ) 

         [ 
            { 
                path: '/',
                element: <EightacademyProject/> ,
                children:  [ 
                    {index: true , element:  <TemplateHero/> } ,
                    {path: 'FAQ', element:  <FAQ/> } ,
                    {path: 'About', element:  <TemplateAbout/> } ,
                    {path: 'Features', element:  <Features/> } ,
                ]
              }
         ]


    );

    return (
        <RouterProvider router={templatepage} />
    );
};

export default TemplatePage;
