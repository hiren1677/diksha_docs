import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import images
import logoNcert from '../../assets/logo_tenant_ncert.png';
import logoCbse from '../../assets/logo_tenant_cbse.png';
import logoNios from '../../assets/logo_tenant_nios.png';
import imgStateBoards from '../../assets/img_state_ut_boards.png';

const BrowsebyTenant: React.FC = () => {
  return (
    <div className="browse-by-tenant py-5">
      <Container>
        <h2 className="mb-4 section-title">Browse by State / Board / Tenant</h2>
        <Row>
          <Col md={3} className="mb-3">
            <Card className="h-100 nonstate-explore">
              <Card.Body className="py-3 d-flex flex-row align-items-center">
                <img src={logoNcert} className="img-fluid stage-icon me-3" alt="NCERT Logo" />
                <div className="d-flex flex-column">
                  <strong className="d-block tenant-title">NCERT</strong>
                  <span className="d-sm-block d-md-none tenant-description">
                    National Council of Educational<br />Research and Training
                  </span>
                </div>
              </Card.Body>
              <Card.Body className="py-0 d-none d-md-block tenant-description">
                National Council of Educational<br />Research and Training
              </Card.Body>
              <Card.Footer className="pb-3 d-none d-md-block">
                <a href="#" className="d-block fw-bold" title="">
                  Explore Content<i className="fas fa-arrow-right ms-2"></i>
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={3} className="mb-3">
            <Card className="h-100 nonstate-explore">
              <Card.Body className="py-3 d-flex flex-row align-items-center">
                <img src={logoCbse} className="img-fluid stage-icon me-3" alt="CBSE Logo" />
                <div className="d-flex flex-column">
                  <strong className="d-block tenant-title">CBSE</strong>
                  <span className="d-sm-block d-md-none tenant-description">
                    Central Board of Secondary<br />Education
                  </span>
                </div>
              </Card.Body>
              <Card.Body className="py-0 d-none d-md-block tenant-description">
                Central Board of Secondary<br />Education
              </Card.Body>
              <Card.Footer className="pb-3 d-none d-md-block">
                <a href="#" className="d-block fw-bold" title="">
                  Explore Content<i className="fas fa-arrow-right ms-2"></i>
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={3} className="mb-3">
            <Card className="h-100 nonstate-explore">
              <Card.Body className="py-3 d-flex flex-row align-items-center">
                <img src={logoNios} className="img-fluid stage-icon me-3" alt="NIOS Logo" />
                <div className="d-flex flex-column">
                  <strong className="d-block tenant-title">NIOS</strong>
                  <span className="d-sm-block d-md-none tenant-description">
                    The National Institute of<br />Open Schooling
                  </span>
                </div>
              </Card.Body>
              <Card.Body className="py-0 d-none d-md-block tenant-description">
                The National Institute of<br />Open Schooling
              </Card.Body>
              <Card.Footer className="pb-3 d-none d-md-block">
                <a href="#" className="d-block fw-bold" title="">
                  Explore Content<i className="fas fa-arrow-right ms-2"></i>
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={3} className="mb-3">
            <Card className="h-100 state-explore">
              <Card.Body className="py-3 d-flex flex-row align-items-center">
                <img src={imgStateBoards} className="img-fluid stage-icon me-3" alt="36 States/UTs Logo" />
                <div className="d-flex flex-column">
                  <strong className="d-block tenant-title">36 States/UTs</strong>
                  <span className="d-sm-block d-md-none state-dropdown">
                    <select
                      name="state"
                      id="state-mobile"
                      className="form-select state-boards"
                      tabIndex={0}
                      aria-label="select state to explore"
                      role="presentation"
                      title="state name"
                    >
                      <option value="Select State">Select State</option>
                      <option value="apekx" id="ap_k-12_1">Andhra Pradesh</option>
                      <option value="ar" id="ar_k-12">Arunachal Pradesh</option>
                      <option value="as" id="as_k-12">Assam</option>
                      <option value="br" id="br_k-12">Bihar</option>
                      <option value="ch" id="ch_k-12">Chandigarh</option>
                      <option value="cg" id="cg_k-12">Chhattisgarh</option>
                      <option value="dl" id="dl_k-12_1">Delhi</option>
                      <option value="ga" id="ga_k-12">Goa</option>
                      <option value="gj" id="gj_k-12">Gujarat</option>
                      <option value="hr" id="hr_k-12">Haryana</option>
                      <option value="hp" id="hp_k-12">Himachal Pradesh</option>
                      <option value="jk" id="jk_k-12">Jammu And Kashmir</option>
                      <option value="jh" id="jh_k-12">Jharkhand</option>
                      <option value="ka" id="ka_k-12">Karnataka</option>
                      <option value="kl" id="kl_k-12">Kerala</option>
                      <option value="mp" id="mp_k-12">Madhya Pradesh</option>
                      <option value="mitra" id="mh_k-12_1">Maharashtra</option>
                      <option value="mn" id="mn_k-12">Manipur</option>
                      <option value="ml" id="ml_k-12">Meghalaya</option>
                      <option value="mz" id="mz_k-12">Mizoram</option>
                      <option value="nl" id="nl_k-12">Nagaland</option>
                      <option value="od" id="od_k-12">Odisha</option>
                      <option value="pb" id="pb_k-12">Punjab</option>
                      <option value="rj" id="rj_k-12">Rajasthan</option>
                      <option value="sk" id="sk_k-12_1">Sikkim</option>
                      <option value="tn" id="tn_k-12_5">Tamil Nadu</option>
                      <option value="ts" id="ts_k-12">Telangana</option>
                      <option value="tp" id="tp_k-12">Tripura</option>
                      <option value="up" id="up_k-12">Uttar Pradesh</option>
                      <option value="uk" id="uk_k-12">Uttarakhand</option>
                      <option value="wb" id="wb_k-12">West Bengal</option>
                      <option value="an" id="an_k-12">Andaman and Nicobar Islands</option>
                      <option value="DD" id="dd_k-12">Dadra & Nagar Haveli & Daman & Diu</option>
                      <option value="ld" id="ld_k-12">Ladakh</option>
                      <option value="lk" id="lk_k-12">Lakshadweep</option>
                      <option value="py" id="py_k-12">Puducherry</option>
                    </select>
                  </span>
                </div>
              </Card.Body>
              <Card.Body className="py-0 d-none d-md-block state-dropdown">
                <select
                  name="state"
                  id="state-desktop"
                  className="form-select state-boards"
                  tabIndex={0}
                  aria-label="select state to explore"
                  role="presentation"
                  title="state name"
                >
                  <option value="Select State">Select State</option>
                  <option value="apekx" id="ap_k-12_2">Andhra Pradesh</option>
                  <option value="ar" id="ar_k-12_2">Arunachal Pradesh</option>
                  <option value="as" id="as_k-12_2">Assam</option>
                  <option value="br" id="br_k-12_2">Bihar</option>
                  <option value="ch" id="ch_k-12_2">Chandigarh</option>
                  <option value="cg" id="cg_k-12_2">Chhattisgarh</option>
                  <option value="dl" id="dl_k-12_2">Delhi</option>
                  <option value="ga" id="ga_k-12_2">Goa</option>
                  <option value="gj" id="gj_k-12_2">Gujarat</option>
                  <option value="hr" id="hr_k-12_2">Haryana</option>
                  <option value="hp" id="hp_k-12_2">Himachal Pradesh</option>
                  <option value="jk" id="jk_k-12_2">Jammu And Kashmir</option>
                  <option value="jh" id="jh_k-12_2">Jharkhand</option>
                  <option value="ka" id="ka_k-12_2">Karnataka</option>
                  <option value="kl" id="kl_k-12_2">Kerala</option>
                  <option value="mp" id="mp_k-12_2">Madhya Pradesh</option>
                  <option value="mitra" id="mh_k-12_2">Maharashtra</option>
                  <option value="mn" id="mn_k-12_2">Manipur</option>
                  <option value="ml" id="ml_k-12_2">Meghalaya</option>
                  <option value="mz" id="mz_k-12_2">Mizoram</option>
                  <option value="nl" id="nl_k-12_2">Nagaland</option>
                  <option value="od" id="od_k-12_2">Odisha</option>
                  <option value="pb" id="pb_k-12_2">Punjab</option>
                  <option value="rj" id="rj_k-12_2">Rajasthan</option>
                  <option value="sk" id="sk_k-12_2">Sikkim</option>
                  <option value="tn" id="tn_k-12_6">Tamil Nadu</option>
                  <option value="ts" id="ts_k-12_2">Telangana</option>
                  <option value="tp" id="tp_k-12_2">Tripura</option>
                  <option value="up" id="up_k-12_2">Uttar Pradesh</option>
                  <option value="uk" id="uk_k-12_2">Uttarakhand</option>
                  <option value="wb" id="wb_k-12_2">West Bengal</option>
                  <option value="an" id="an_k-12_2">Andaman and Nicobar Islands</option>
                  <option value="DD" id="dd_k-12_2">Dadra & Nagar Haveli & Daman & Diu</option>
                  <option value="ld" id="ld_k-12_2">Ladakh</option>
                  <option value="lk" id="lk_k-12_2">Lakshadweep</option>
                  <option value="py" id="py_k-12_2">Puducherry</option>
                </select>
              </Card.Body>
              <Card.Footer className="pb-3 d-none d-md-block">
                <a href="#" className="d-block fw-bold">
                  <span data-translate="newExploreContent">
                    Explore Content <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrowsebyTenant;