import React from 'react';

import logos_google from '../assets/images/Brand/logos_google.png'
import logos_monday from '../assets/images/Brand/logos_monday.png'
import Notion from '../assets/images/Brand/Notion.png'
import Slack from '../assets/images/Brand/Slack.png'
import Trello_logo_blue1 from '../assets/images/Brand/Trello_logo_blue1.png'

const Brand = () => {
    return (
        <>
            <div className='flex flex-col items-center md:flex-row md:justify-evenly py-8 bg-indigo-300'>
                <div className="google py-4 md:py-0"><img src={logos_google} alt="" /></div>
                <div className="trello py-4 md:py-0"><img src={logos_monday} alt="" /></div>
                <div className="monday py-4 md:py-0"><img src={Notion} alt="" /></div>
                <div className="notion py-4 md:py-0"><img src={Slack} alt="" /></div>
                <div className="slack py-4 md:py-0"><img src={Trello_logo_blue1} alt="" /></div>
            </div>
        </>
    );
};

export default Brand;