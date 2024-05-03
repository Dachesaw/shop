import phone1 from "../../assets/phone-images/phone-1.svg";
import phone2 from "../../assets/phone-images/phone-2.svg";
import phone3 from "../../assets/phone-images/phone-3.svg";
import phone4 from "../../assets/phone-images/phone-4.svg";
import phone5 from "../../assets/phone-images/phone-5.svg";
import "./AboutItem.css";

export default function AboutItem() {
    function ItemImgChange(e: any) {
        let oldMainImg = document.getElementById("main-item-image");
        let additionalImages = document.querySelectorAll(
            ".additional-item-image"
        );
        if (oldMainImg !== null) {
            (oldMainImg as HTMLImageElement).src = e.target.src;
            additionalImages.forEach((img) => {
                img.classList.remove("chosen-item-image");
            });
            e.target.classList.add("chosen-item-image");
        } else {
            alert("error");
        }
    }

    return (
        <section className="about-item-section">
            <h2>Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)</h2>
            <span>-39%</span>
            <span>Товар из рекламы</span>
            <div className="item-container">
                <div>
                    <div className="main-img-container">
                        <img src={phone1} alt="" id="main-item-image" />
                    </div>
                    <div className="additional-image-scroll">
                        <img
                            src={phone1}
                            alt=""
                            className="additional-item-image chosen-item-image"
                            onClick={ItemImgChange}
                        />
                        <img
                            src={phone2}
                            alt=""
                            className="additional-item-image"
                            onClick={ItemImgChange}
                        />
                        <img
                            src={phone3}
                            alt=""
                            className="additional-item-image"
                            onClick={ItemImgChange}
                        />
                        <img
                            src={phone4}
                            alt=""
                            className="additional-item-image"
                            onClick={ItemImgChange}
                        />
                        <img
                            src={phone5}
                            alt=""
                            className="additional-item-image"
                            onClick={ItemImgChange}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
