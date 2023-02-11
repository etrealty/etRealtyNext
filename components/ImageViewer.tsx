import ImageViewer from "react-simple-image-viewer";
import { useEffect, useState } from 'react';

type ImgViewProps = {
    images: string[] | null,
    cur: number,
    open: boolean
}

export default function ImgView({images, cur, open}: ImgViewProps) {
    
    const [curImg, setCurImg] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    
    
    useEffect(()=> {
        setCurImg(cur);
        setIsOpen(open);
    });
   
    const closeImgView = () => {
        setCurImg(0);
        setIsOpen(false);
    }



    if(images !== null){
        return (
            <ImageViewer 
                src={images}
                currentIndex={curImg}
                onClose={closeImgView}
                disableScroll={false}
                backgroundStyle={{backgroundColor: "black"}}
                closeOnClickOutside={true}
            />

        )
    }else{
        return (
            <div>
                <span>No Images for this Property</span>
            </div>

        )
    }


}
