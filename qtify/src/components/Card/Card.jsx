import React from "react";
import styles from "./Card.module.css"


function Card({data, type}) {
    const getCard = (type) => {
        switch(type) {
            case "album" : {
                return(

                    <div className={styles.wrapper}>
            
                        <div className={styles.card}>
            
                            <img src={image} alt="song" loading="lazy"/>
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p> {likes} Likes </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                                <p> {title}</p>
                        </div>
                    </div>
                )
            }
        }
    }
 const {likes, image, title} = data
    return(

        <div className={styles.wrapper}>

            <div className={styles.card}>

                <img src={image} alt="song" loading="lazy"/>
                <div className={styles.banner}>
                    <div className={styles.pill}>
                        <p> {likes} Likes </p>
                    </div>
                </div>
            </div>
            <div className={styles.titleWrapper}>
                    <p> {title}</p>
            </div>
        </div>
    )
}