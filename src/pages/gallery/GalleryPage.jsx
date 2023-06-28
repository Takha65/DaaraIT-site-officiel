import React, {cloneElement} from 'react'
import { createPortal } from 'react-dom';
import { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import TabItem from '../../components/gallery/TabItem';
import ResourceDataMap from '../../components/ResourceDataMap';
import galeryTabs from '../../data/galleryTabs.json'
import BannerImg from '../../ressources/images/commission.png';
// import kennedy1 from '../../images/kennedy/kennedy1.jpg'
import 'animate.css';
import ImageItem from '../../components/gallery/ImageItem';

const ModalImage = ({open, close, children}) => {
  if (!open) {
    return null;
  }

  return createPortal(
    <div
      onClick={close}
      style={{
        position: "fixed",
        zIndex: "999999",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(20,30,40,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <div
        className="animate__animated animate__backInUp animate__delay-0.5s"
        style={{ width: "98%", height: "95%" }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("root")
  );
}

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [currentTab, setCurrentTab] = useState('all')
    const [displayedImages, setDisplayedImages] = useState(galeryTabs.filter(galery => galery.tab.toLowerCase() === currentTab.toLowerCase())[0].images)

    const changeDisplayedImages = (textTab) => {
        setCurrentTab(textTab)
        const images = galeryTabs.filter(galery => galery.tab.toLowerCase() === textTab.toLowerCase())[0].images
        setDisplayedImages(images)
    }

    const showImageModal = (image) => {
        setOpenModal(true)
        setSelectedImage(image)
    }

    // !on clone l'element pour pouvoir lui passer des props supplementaires - "currentTab & changeDisplayedImages"
    const ClonedTabItem = ({tab}) => cloneElement(<TabItem tab={tab} />, {currentTab, changeDisplayedImages})
    const ClonedImageItem = ({image}) => cloneElement(<ImageItem image={image} />, {showImageModal})
    
  return (
    <div>
        <ModalImage open={openModal} close={() => setOpenModal(false)}>
                {
                    selectedImage ? <img 
                    src={require("../../images/"+selectedImage)} 
                    alt={"ImageItem"} 
                    style={{width:'100%', height:'100%', objectFit:'contain'}}
                     /> : null
                }
        </ModalImage>
        <Banner 
            title="Galerie" 
            img={BannerImg}
         />
        <section className='p-5 md:p-10  md:pt-8'>
            <nav className='my-6'>
                <ul className='flex flex-wrap gap-3 md:gap-4'>
                    <ResourceDataMap
                        resourceData={galeryTabs}
                        resourceItem={ClonedTabItem}
                        resourceName="tab"
                     />
                </ul>
            </nav>
            <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    <ResourceDataMap
                        resourceData={displayedImages}
                        resourceItem={ClonedImageItem}
                        resourceName="image"
                     />
                }
            </main>
        </section>
    </div>
  )
}

export default GalleryPage