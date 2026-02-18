import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageDikshaBannersWeb from '../../assets/web/banner-diksha.jpg';
import imageDikshaBannersMobile from '../../assets/mobile/banner-diksha.jpg';
import imageDikshaCoursesWeb from '../../assets/web/diksha_courses.jpg';
import imageDikshaCoursesMobile from '../../assets/mobile/diksha_courses.jpg';
import imageParikshaPeCharachaWeb from '../../assets/web/pariksha_pe_charcha.jpg';
import imageParikshaPeCharachaMobile from '../../assets/mobile/pariksha_pe_charcha.jpg';
import imagesurveyOfNECCompetitionWeb from '../../assets/web/survey_of_nec_competition.jpg';
import imagesurveyOfNECCompetitionMobile from '../../assets/mobile/survey_of_nec_competition.jpg';
import imageKatbookWeb from '../../assets/web/katbook.jpg';
import imageKatbookMobile from '../../assets/mobile/katbook.jpg';
import imageDrSayamPrasadWeb from '../../assets/web/dr_sayam_prasad.jpg';
import imageDrSayamPrasadMobile from '../../assets/mobile/dr_sayam_prasad.jpg';
import imageNewCriminalLawWeb from '../../assets/web/new_criminal_law.jpg';
import imageNewCriminalLawMobile from '../../assets/mobile/new_criminal_law.jpg';
import imageKumbhMelaBannerWeb from '../../assets/web/kumbh_mela_banner.jpg';
import imageKumbhMelaBannerMobile from '../../assets/mobile/kumbh_mela_banner.jpg';
import imageConstitutionDayWeb from '../../assets/web/constitution_day.jpg';
import imageConstitutionDayMobile from '../../assets/mobile/constitution_day.jpg';
import imageBirsaMundaWeb from '../../assets/web/birsa_munda.jpg';
import imageBirsaMundaMobile from '../../assets/mobile/birsa_munda.jpg';
import imageVirasatAurVikasWeb from '../../assets/web/virasat_aur_vikass.jpg';
import imageVirasatAurVikasMobile from '../../assets/mobile/virasat_aur_vikass.jpg';
import imageNationalSpaceDayWeb from '../../assets/web/national_space_day.jpg';
import imageNationalSpaceDayMobile from '../../assets/mobile/national_space_day.jpg';
import imageSatheeWeb from '../../assets/web/sathee.jpg';
import imageSatheeMobile from '../../assets/mobile/sathee.jpg';

const HomepageBanners: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <section className="banner-section">
            <Slider {...settings}>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageDikshaBannersWeb} className="img-fluid w-100 d-none d-md-block" alt="pariksha pe characha" loading="lazy" decoding="async" />
                        <img src={imageDikshaBannersMobile} className="img-fluid w-100 d-md-none" alt="pariksha pe characha" loading="lazy" decoding="async" />
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageDikshaCoursesWeb} className="img-fluid w-100 d-none d-md-block" alt="Personalised Adaptive Learning" loading="lazy" decoding="async" />
                        <img src={imageDikshaCoursesMobile} className="img-fluid w-100 d-md-none" alt="Personalised Adaptive Learning" loading="lazy" decoding="async" />
                        <div className="language-buttons btn-diksha-courses d-flex flex-nowrap gap-3 position-absolute">
                            <a href="https://learning.diksha.gov.in/diksha/course.php?id=549&section=1351" className="btn-pal-subject py-1 px-3 text-center">Science- IX</a>
                            <a href="https://learning.diksha.gov.in/diksha/course.php?id=548&section=1350" className="btn-pal-subject py-1 px-3 text-center">Mathematics- IX</a>
                            <a href="https://learning.diksha.gov.in/diksha/course.php?id=761&section=1719" className="btn-pal-subject py-1 px-3 text-center">Science- X</a>
                            <a href="https://learning.diksha.gov.in/diksha/course.php?id=760&section=1722" className="btn-pal-subject py-1 px-3 text-center">Mathematics- X</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <a href="https://www.youtube.com/live/jL0nhTOhsPc?si=qFIXvSwNf3lSY8EH" target="_blank">
                            <img src={imageParikshaPeCharachaWeb} className="img-fluid w-100 d-none d-md-block" alt="pariksha pe characha" loading="lazy" decoding="async" />
                            <img src={imageParikshaPeCharachaMobile} className="img-fluid w-100 d-md-none" alt="pariksha pe characha" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <a href="https://forms.gle/oi3drgA79GSvveQ67" target="_blank">
                            <img src={imagesurveyOfNECCompetitionWeb} className="img-fluid w-100 d-none d-md-block" alt="Survey for National Educational eContent Competition" loading="lazy" decoding="async" />
                            <img src={imagesurveyOfNECCompetitionMobile} className="img-fluid w-100 d-md-none" alt="Survey for National Educational eContent Competition" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <a href="https://explorencertkatbook.com/?lang=en" target="_blank">
                            <img src={imageKatbookWeb} className="img-fluid w-100 d-none d-md-block" alt="NCRT Katbook" loading="lazy" decoding="async" />
                            <img src={imageKatbookMobile} className="img-fluid w-100 d-md-none" alt="NCRT Katbook" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageDrSayamPrasadWeb} className="img-fluid w-100 d-none d-md-block" alt="Dr sayam prasad" loading="lazy" decoding="async" />
                        <img src={imageDrSayamPrasadMobile} className="img-fluid w-100 d-md-none" alt="Dr sayam prasad" loading="lazy" decoding="async" />
                        <div className="language-buttons greenbg">
                            <a href="https://diksha.gov.in/learn/course/do_314366111177105408113537" target="_blank" className="ant-btn btn-virasat-and-vikas">Click here to play the quiz</a>
                            <a href="https://diksha.gov.in/learn/course/do_314366115739009024113540" target="_blank" className="ant-btn btn-virasat-and-vikas">प्रश्नोत्तरी खेलने के लिए क्लिक करें</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageNewCriminalLawWeb} className="img-fluid w-100 d-none d-md-block" alt="India's New Criminal Laws" loading="lazy" decoding="async" />
                        <img src={imageNewCriminalLawMobile} className="img-fluid w-100 d-md-none" alt="India's New Criminal Laws" loading="lazy" decoding="async" />
                        <div className="language-buttons greenbg">
                            <a href="https://diksha.gov.in/learn/course/do_31426923953509171215151" target="_blank" className="ant-btn btn-india-new-criminal-law">Click here to play the quiz</a>
                            <a href="https://diksha.gov.in/learn/course/do_31426927087326003215035" target="_blank" className="ant-btn btn-india-new-criminal-law">प्रश्नोत्तरी खेलने के लिए क्लिक करें</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageKumbhMelaBannerWeb} className="img-fluid w-100 d-none d-md-block" alt="Mahakumbh Mela" loading="lazy" decoding="async" />
                        <img src={imageKumbhMelaBannerMobile} className="img-fluid w-100 d-md-none" alt="Mahakumbh Mela" loading="lazy" decoding="async" />
                        <div className="language-buttons greenbg">
                            <a href="https://diksha.gov.in/learn/course/do_314219833593864192130358" target="_blank" className="ant-btn btn-kumbh-mela">Click here to play the quiz</a>
                            <a href="https://diksha.gov.in/learn/course/do_314219837459193856130361" target="_blank" className="ant-btn btn-kumbh-mela">प्रश्नोत्तरी खेलने के लिए क्लिक करें</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageConstitutionDayWeb} className="img-fluid w-100 d-none d-md-block" alt="Constitution Day" loading="lazy" decoding="async" />
                        <img src={imageConstitutionDayMobile} className="img-fluid w-100 d-md-none" alt="Constitution Day" loading="lazy" decoding="async" />
                        <div className="language-buttons creambg">
                            <a href="https://diksha.gov.in/learn/course/do_314192890332504064119943" target="_blank" className="ant-btn btn-constitution-day">Click here to play the quiz</a>
                            <a href="https://diksha.gov.in/learn/course/do_314193105131880448119992" target="_blank" className="ant-btn btn-constitution-day">प्रश्नोत्तरी खेलने के लिए क्लिक करें</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageBirsaMundaWeb} className="img-fluid w-100 d-none d-md-block" alt="Birsa Munda" loading="lazy" decoding="async" />
                        <img src={imageBirsaMundaMobile} className="img-fluid w-100 d-md-none" alt="Birsa Munda" loading="lazy" decoding="async" />  
                        <div className="language-buttons brownbg">
                            <a href="https://diksha.gov.in/learn/course/do_314181708078055424123591" target="_blank" className="ant-btn btn-birsa-munda">Click here to play the quiz</a>
                            <a href="https://diksha.gov.in/learn/course/do_314181721670123520118131" target="_blank" className="ant-btn btn-birsa-munda">प्रश्नोत्तरी खेलने के लिए क्लिक करें</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageVirasatAurVikasWeb} className="img-fluid w-100 d-none d-md-block" alt="Virasat aur Vikas" loading="lazy" decoding="async" />
                        <img src={imageVirasatAurVikasMobile} className="img-fluid w-100 d-md-none" alt="Virasat aur Vikas" loading="lazy" decoding="async" />
                        <div className="language-buttons yellowbg">
                            <a href="https://diksha.gov.in/learn/course/do_314166592133914624115250" target="_blank" className="ant-btn btn-virasat-and-vikas">Click here to play the quiz</a>
                            <a href="https://diksha.gov.in/learn/course/do_314166588047024128113529" target="_blank" className="ant-btn btn-virasat-and-vikas">प्रश्नोत्तरी खेलने के लिए क्लिक करें</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageNationalSpaceDayWeb} className="img-fluid w-100 d-none d-md-block" alt="Chandrayaan" loading="lazy" decoding="async" />
                        <img src={imageNationalSpaceDayMobile} className="img-fluid w-100 d-md-none" alt="Chandrayaan" loading="lazy" decoding="async" />
                        <div className="language-buttons darkbluebg">
                            <a href="https://diksha.gov.in/learn/course/do_31412549417849651215378" target="_blank" className="ant-btn btn-national-space-day">Click here to play the quiz</a>
                            <a href="https://diksha.gov.in/learn/course/do_31412551529434316815899" target="_blank" className="ant-btn btn-national-space-day">प्रश्नोत्तरी खेलने के लिए क्लिक करें</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block w-100 position-relative">
                        <img src={imageSatheeWeb} className="img-fluid w-100 d-none d-md-block" alt="Sathee" loading="lazy" decoding="async" />
                        <img src={imageSatheeMobile} className="img-fluid w-100 d-md-none" alt="Sathee" loading="lazy" decoding="async" />
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default HomepageBanners;
