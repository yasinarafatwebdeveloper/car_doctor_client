// import React from 'react';
import image from"../../../image/car8.jpg"
import image1 from"../../../image/car9.jpg"
const LogoCarItem = () => {
    return (
        <div>
            {/* this is logo car items */}
            <div className="flex mt-10" >
                

                <div className="diff aspect-[16/9] w-1/2">
  <div className="diff-item-1">
    <img alt="daisy" src={image} />
  </div>
  <div className="diff-item-2">
    <img
      alt="daisy"
      src={image1} />
  </div>
  <div className="diff-resizer"></div>
</div>



<div className="w-1/2">
               

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aut sequi suscipit deserunt sed iste commodi ducimus quos maxime exercitationem architecto laboriosam tempora eaque ad nihil dolorem facilis impedit quod?
                </div>
            </div>
        </div>
    );
};

export default LogoCarItem;