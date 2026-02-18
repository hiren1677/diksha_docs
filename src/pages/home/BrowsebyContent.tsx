import React from 'react';
import iconTextbooks from '../../assets/icon_textbooks.png';
import iconVideos from '../../assets/icon_videos.png';
import iconInteractiveContent from '../../assets/icon_interactive_content.png';
import iconCourses from '../../assets/icon_courses.png';

const BrowsebyContent: React.FC = () => {
  return (
    <div className="browse-by-content py-5">
    <div className="container">
        <div className="row">
            <div className="col-6 col-md-3 mb-3">
                <div className="card p-3 h-100">
                    <div className="card-header p-0 d-flex align-items-center">
                        <img src={iconTextbooks} className="textbooks me-3" alt="" title="" />
                        <h6 className="m-0" data-translate="newtextbooks">Textbooks</h6>
                    </div>
                    <div className="card-body text-center p-0 d-flex align-items-center justify-content-start">
                        <a href="#" className="pt-3 d-none d-md-block fw-bold" data-translate="newviewAllTextbooks">View All Textbooks <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
                <div className="card p-3 h-100">
                    <div className="card-header p-0 d-flex align-items-center">
                        <img src={iconVideos} className="videos me-3" alt="" title="" />
                        <h6 className="m-0" data-translate="newvideos">Videos</h6>
                    </div>
                    <div className="card-body text-center p-0 d-flex align-items-center justify-content-start">
                        <a href="#" className="pt-3 d-none d-md-block fw-bold" data-translate="newwatchVideos">Watch Videos <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
                <div className="card p-3 h-100">
                    <div className="card-header p-0 d-flex align-items-center">
                        <img src={iconInteractiveContent} className="interactive-content me-3" alt=""
                            title="" />
                        <h6 className="m-0" data-translate="newinteractiveContent">Interactive Content</h6>
                    </div>
                    <div className="card-body text-center p-0 d-flex align-items-center justify-content-start">
                        <a href="#" className="pt-3 d-none d-md-block fw-bold" data-translate="newtryInteractiveContent">Try Interactive Content <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
                <div className="card p-3 h-100">
                    <div className="card-header p-0 d-flex align-items-center">
                        <img src={iconCourses} className="courses me-3" alt="" title="" />
                        <h6 className="m-0" data-translate="newcourses">Courses</h6>
                    </div>
                    <div className="card-body text-center p-0 d-flex align-items-center justify-content-start">
                        <a href="#" className="pt-3 d-none d-md-block fw-bold" data-translate="newexploreCourses">Explore Courses <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default BrowsebyContent;
