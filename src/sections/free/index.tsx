import React from 'react';

const FreePage: React.FC = () => {
    return (
        <React.Fragment>
            <div id="free" className='flex w-full h-screen items-center justify-center bg-yellow-400 text-center'>
                <div className='modak-regular text-2xl md:text-8xl '>To grab a
                    <br />
                    <a href='https://linktr.ee/thesamosa' className='text-red-500 underline'>
                        <span className='text-red-500'>free samosa </span>
                        <br />
                        follow us</a>
                    <br />
                    and
                    <br />
                    drop the experience of
                    <br />
                    your first byte
                    <br />
                    via
                    <br />
                    <a href='https://wa.me/94770581871' className='text-green-500 underline'>whatsApp</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FreePage;