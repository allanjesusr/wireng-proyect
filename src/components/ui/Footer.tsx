import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

import { NewsAndSocialFooter } from './NewsAndSocialFooter';

export const Footer = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} size='lg' centered>
                <Modal.Header
                    closeButton
                >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Terms and Conditions
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Terms and Conditions</h1>
                    <p>Last updated: June 17, 2022</p>
                    <p>Please read these terms and conditions carefully before using Our Service.</p>
                    <h1>Interpretation and Definitions</h1>
                    <h2>Interpretation</h2>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h2>Definitions</h2>
                    <p>For the purposes of these Terms and Conditions:</p>
                    <ul>
                        <li>
                            <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                        </li>
                        <li>
                            <p><strong>Country</strong> refers to: Texas,  United States</p>
                        </li>
                        <li>
                            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to WirEng, 12307 Roxie Dr.</p>
                        </li>
                        <li>
                            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                        </li>
                        <li>
                            <p><strong>Service</strong> refers to the Website.</p>
                        </li>
                        <li>
                            <p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/">TermsFeed Terms and Conditions Generator</a>.</p>
                        </li>
                        <li>
                            <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refers to WirEng, accessible from <a href="wireng.com" rel="external">wireng.com</a></p>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        </li>
                    </ul>
                    <h1>Acknowledgment</h1>
                    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                    <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                    <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                    <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
                    <h1>Links to Other Websites</h1>
                    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                    <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
                    <h1>Termination</h1>
                    <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                    <p>Upon termination, Your right to use the Service will cease immediately.</p>
                    <h1>Limitation of Liability</h1>
                    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                    <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                    <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
                    <h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>
                    <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
                    <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                    <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
                    <h1>Governing Law</h1>
                    <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                    <h1>Disputes Resolution</h1>
                    <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                    <h1>For European Union (EU) Users</h1>
                    <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
                    <h1>United States Legal Compliance</h1>
                    <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                    <h1>Severability and Waiver</h1>
                    <h2>Severability</h2>
                    <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                    <h2>Waiver</h2>
                    <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
                    <h1>Translation Interpretation</h1>
                    <p>These Terms and Conditions may have been translated if We have made them available to You on our Service.
                        You agree that the original English text shall prevail in the case of a dispute.</p>
                    <h1>Changes to These Terms and Conditions</h1>
                    <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                    <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
                    <h1>Contact Us</h1>
                    <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                    <ul>
                        <li>By email: info@wireng.com</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2} size='lg' centered>
                <Modal.Header
                    closeButton
                >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Terms and Conditions
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Privacy Policy</h1>
                    <p>Last updated: June 17, 2022</p>
                    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                    <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">TermsFeed Privacy Policy Generator</a>.</p>
                    <h1>Interpretation and Definitions</h1>
                    <h2>Interpretation</h2>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h2>Definitions</h2>
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul>
                        <li>
                            <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                        </li>
                        <li>
                            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to WirEng, 12307 Roxie Dr.</p>
                        </li>
                        <li>
                            <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                        </li>
                        <li>
                            <p><strong>Country</strong> refers to: Texas,  United States</p>
                        </li>
                        <li>
                            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                        </li>
                        <li>
                            <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                        </li>
                        <li>
                            <p><strong>Service</strong> refers to the Website.</p>
                        </li>
                        <li>
                            <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                        </li>
                        <li>
                            <p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
                        </li>
                        <li>
                            <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refers to WirEng, accessible from <a href="wireng.com" rel="external nofollow noopener" target="_blank">wireng.com</a></p>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        </li>
                    </ul>
                    <h1>Collecting and Using Your Personal Data</h1>
                    <h2>Types of Data Collected</h2>
                    <h3>Personal Data</h3>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                        <li>
                            <p>Email address</p>
                        </li>
                        <li>
                            <p>First name and last name</p>
                        </li>
                        <li>
                            <p>Phone number</p>
                        </li>
                        <li>
                            <p>Address, State, Province, ZIP/Postal code, City</p>
                        </li>
                        <li>
                            <p>Usage Data</p>
                        </li>
                    </ul>
                    <h3>Usage Data</h3>
                    <p>Usage Data is collected automatically when using the Service.</p>
                    <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                    <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                    <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                    <h3>Information from Third-Party Social Media Services</h3>
                    <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
                    <ul>
                        <li>Google</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                    <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
                    <p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
                    <h3>Tracking Technologies and Cookies</h3>
                    <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                    <ul>
                        <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                        <li><strong>Flash Cookies.</strong> Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read &quot;Where can I change the settings for disabling, or deleting local shared objects?&quot; available at <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_" rel="external nofollow noopener" target="_blank">https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</a></li>
                        <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
                    </ul>
                    <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank">TermsFeed website</a> article.</p>
                    <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
                    <ul>
                        <li>
                            <p><strong>Necessary / Essential Cookies</strong></p>
                            <p>Type: Session Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                        </li>
                        <li>
                            <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
                            <p>Type: Persistent Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                        </li>
                        <li>
                            <p><strong>Functionality Cookies</strong></p>
                            <p>Type: Persistent Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                        </li>
                    </ul>
                    <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
                    <h2>Use of Your Personal Data</h2>
                    <p>The Company may use Personal Data for the following purposes:</p>
                    <ul>
                        <li>
                            <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
                        </li>
                        <li>
                            <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                        </li>
                        <li>
                            <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                        </li>
                        <li>
                            <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                        </li>
                        <li>
                            <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                        </li>
                        <li>
                            <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                        </li>
                        <li>
                            <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                        </li>
                        <li>
                            <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                        </li>
                    </ul>
                    <p>We may share Your personal information in the following situations:</p>
                    <ul>
                        <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
                        <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                        <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                        <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                        <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
                        <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
                    </ul>
                    <h2>Retention of Your Personal Data</h2>
                    <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                    <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                    <h2>Transfer of Your Personal Data</h2>
                    <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                    <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                    <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                    <h2>Disclosure of Your Personal Data</h2>
                    <h3>Business Transactions</h3>
                    <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                    <h3>Law enforcement</h3>
                    <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                    <h3>Other legal requirements</h3>
                    <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                    <ul>
                        <li>Comply with a legal obligation</li>
                        <li>Protect and defend the rights or property of the Company</li>
                        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>Protect the personal safety of Users of the Service or the public</li>
                        <li>Protect against legal liability</li>
                    </ul>
                    <h2>Security of Your Personal Data</h2>
                    <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                    <h1>Children's Privacy</h1>
                    <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                    <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
                    <h1>Links to Other Websites</h1>
                    <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                    <h1>Changes to this Privacy Policy</h1>
                    <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                    <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                    <h1>Contact Us</h1>
                    <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                    <ul>
                        <li>By email: info@wireng.com</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="footer__container mobileFooterContainer" id="navFooter">
                <a href="#nav-top">
                    <div className="footer__back-top pointer">
                        <h2>Back to top</h2>
                    </div>
                </a>
                <div className="footer__nav-footer">

                    <Container>

                        <Row className="g-4">
                            <Col>
                                <ul className="list-unstyled">
                                    <li>Rural Solutions</li>
                                    <li>Home Solutions</li>
                                    <li>Mobile Solutions</li>
                                    <li>Marine Solutions</li>
                                    <li>Drones Solutions</li>
                                    <li>Custom Solutions</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>Become a WirEng® System Installer</li>
                                    <li>Become a WirEng® Representative</li>
                                    <li>Become a WirEng® Reseller</li>
                                    <li>Become a WirEng® Distributor</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li><Link to='/dealer-locator/' className="footer__link">WirEng® in the World</Link></li>
                                    <li><Link to='/about-wireng/' className="footer__link">About WirEng®</Link></li>
                                    <li><Link to='/get-in-touch/' className="footer__link">Contact Us</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>Register Your WirEng® Product</li>
                                    <li>WirEng® Two-Year Warranty</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li><Link to='/get-in-touch/' className="footer__link">Contact the WirEng® Engineering Team</Link></li>
                                    <li><Link to='/support/' className="footer__link">Contact the WirEng® Sales Team</Link></li>
                                    <li><Link to='/b2b-oem-inquiry/' className="footer__link">Contact the WirEng® Business Team</Link></li>
                                    <li><Link to='/government-military-inquiry/' className="footer__link">Government/Military Relations</Link></li>
                                    <li><Link to='/b2b-oem-inquiry/' className="footer__link">B2B/OEM Relations</Link></li>
                                    <li><Link to='/b2b-oem-inquiry/' className="footer__link">B2B Partnerships</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li><Link to='/about-wireng/' className="footer__link">Company Profile</Link></li>
                                    <li>Testimonials</li>
                                    <li
                                        onClick={handleShow2}
                                        className="footer__link pointer"
                                    >Privacy Policy</li>
                                    <li
                                        onClick={handleShow}
                                        className="footer__link pointer"
                                    >Terms and Conditions</li>
                                    <li
                                        onClick={handleShow}
                                        className="footer__link pointer"
                                    >Website Terms of Service</li>
                                    <li><Link to='/custom-product-inquiry/' className="footer__link">Product Request</Link>
                                    </li>
                                    <li><a href="#newsletter" className='footer__link '>Email Newsletter</a> </li>
                                    <li>Site Map</li>
                                    <li>Technical Papers</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>WirEng® on YouTube</li>
                                    <li>WirEng® on LinkedIn</li>
                                    <li>WirEng® on Tweeter</li>
                                    <li>WirEng® on Facebook</li>
                                    <li>WirEng® on Instagram</li>
                                    <li>WirEng® Careers</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>WirEng® Headquarters</li>
                                    <li>Austin, Texas 78729</li>
                                    <li>United States of America</li>
                                    <li>Tel. +1-512-588-3638</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="footer__productsTitle">
                    <h2>The WirEng® 2022 Product Line</h2>
                </div>

                <div className="footer__nav-footer">
                    <Container>

                        <Row className="g-4">
                            <Col>
                                <div className="footer__nav-footer-colhead">DroneAnt™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/droneant' className="footer__link">DroneAnt™</Link></li>
                                    <li><Link to='/products/droneant-plus' className="footer__link">DroneAnt-Plus™</Link></li>
                                    <li><Link to='/products/droneant16' className="footer__link">DroneAnt16™</Link></li>
                                    <li><Link to='/products/droneant16-plus' className="footer__link">DroneAnt16-Plus™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">GiAnt-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/giant-5g' className="footer__link">GiAnt-5G™</Link></li>
                                    <li><Link to='/products/giant2-5g' className="footer__link">GiAnt2-5G™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">GigaMIMO-Plus-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/gigamimo-plus-5g' className="footer__link">GigaMIMO-Plus-5G™</Link></li>
                                    <li><Link to='/products/gigamimo16-plus-5g-2x2' className="footer__link">GigaMIMO16-Plus-5G-2x2™</Link></li>
                                    <li><Link to='/products/gigamimo16-plus-5g-4x2' className="footer__link">GigaMIMO16-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/products/gigamimo16-plus-5g-4x4' className="footer__link">GigaMIMO16-Plus-5G-4x4™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">MIMOMount™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/mimomount' className="footer__link">MIMOMount-2x2™</Link></li>
                                    <li><Link to='/products/mimomount4' className="footer__link">MIMOMount-4x4™</Link></li>
                                    <li><Link to='/products/mimomount8' className="footer__link">MIMOMount-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">OctAnt-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/octant-5g' className="footer__link">OctAnt-5G-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">Omnirial-Plus-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/omnirial2-plus-5g' className="footer__link">Omnirial2-Plus-5G™</Link></li>
                                    <li><Link to='/products/omnirial4-plus-5g-4x2' className="footer__link">Omnirial4-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/products/omnirial4-plus-5g-4x4' className="footer__link">Omnirial4-Plus-5G-4x4™</Link></li>
                                    <li><Link to='/products/omnirial8-plus-5g-8x2' className="footer__link">Omnirial8-Plus-5G-8x2™</Link></li>
                                    <li><Link to='/products/omnirial8-plus-5g-8x4' className="footer__link">Omnirial8-Plus-5G-8x4™</Link></li>
                                    <li><Link to='/products/omnirial8-plus-5g-8x8' className="footer__link">Omnirial8-Plus-5G-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">WideAnt-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/wideant-5g' className="footer__link">WideAnt-5G™</Link></li>
                                    <li><Link to='/products/wideant2-5g' className="footer__link">WideAnt2-5G™</Link></li>
                                    <li><Link to='/products/wideant4-5g-4x2' className="footer__link">WideAnt4-5G-4x2™</Link></li>
                                    <li><Link to='/products/wideant4-5g-4x4' className="footer__link">WideAnt4-5G-4x4™</Link></li>
                                    <li><Link to='/products/wideant8-5g-8x2' className="footer__link">WideAnt8-5G-8x2™</Link></li>
                                    <li><Link to='/products/wideant8-5g-8x4' className="footer__link">WideAnt8-5G-8x4™</Link></li>
                                    <li><Link to='/products/wideant8-5g-8x8' className="footer__link">WideAnt8-5G-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">WideAnt-Plus-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/wideant-plus-5g' className="footer__link">WideAnt-Plus-5G™</Link></li>
                                    <li><Link to='/products/wideant2-plus-5g' className="footer__link">WideAnt2-Plus-5G™</Link></li>
                                    <li><Link to='/products/wideant2-plus-5g-ref' className="footer__link">WideAnt2-Plus-5G-Ref™</Link></li>
                                    <li><Link to='/products/wideant4-plus-5g-4x2' className="footer__link">WideAnt4-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/products/wideant4-plus-5g-4x4' className="footer__link">WideAnt4-Plus-5G-4x4™</Link></li>
                                    <li><Link to='/products/wideant8-plus-5g-8x2' className="footer__link">WideAnt8-Plus-5G-8x2™</Link></li>
                                    <li><Link to='/products/wideant8-plus-5g-8x4' className="footer__link">WideAnt8-Plus-5G-8x4™</Link></li>
                                    <li><Link to='/products/wideant8-plus-5g-8x8' className="footer__link">WideAnt8-Plus-5G-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">ExtAnt-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/extant-smaf-smam' className="footer__link">EXTANT-SMAF-SMAM™</Link></li>
                                    <li><Link to='/products/extant-smaf-tncm' className="footer__link">EXTANT-SMAF-TNCM™</Link></li>
                                    <li><Link to='/products/extant-smaf-ts9m' className="footer__link">EXTANT-SMAF-TS9™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">WRG400-AU™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/products/wrg400-snam-nm-10m' className="footer__link">WRG400-SMAM-NM-10M™</Link></li>
                                    <li><Link to='/products/wrg400-snam-nm-20m' className="footer__link">WRG400-SMAM-NM-20M™</Link></li>
                                    <li><Link to='/products/wrg400-smam-ranm-10m' className="footer__link">WRG400-SMAM-RANM-10M™</Link></li>
                                    <li><Link to='/products/wrg400-smam-ranm-20m' className="footer__link">WRG400-SMAM-RANM-20M™</Link></li>
                                </ul>
                            </Col>

                        </Row>
                    </Container>
                </div>

                <NewsAndSocialFooter />

                <div className="footer__rights-container">
                    <p>Copyright© 2010-2022 WirEng®. All rights reserved.</p>
                </div>
            </div>

            {/* Footer Responsive */}

            <footer className="navFooterMobile">
                <div id="nav-footer" className="footer__navFooterGateway">
                    <a id="mblFooter-gototop" className="navFooter-topPage" href="#nav-top">
                        <i className="fa-solid fa-caret-up navIcon"></i>
                        <b className="nav-b">Top of Page</b>
                    </a>

                    <Container>
                        <div className="footer__mobileContent">
                            <div className="footer__mobileColumn">
                                <ul className="footer__mobileList">
                                    <li>Rural Solutions</li>
                                    <li>Home Solutions</li>
                                    <li>Mobile Solutions</li>
                                    <li>Marine Solutions</li>
                                    <li>Drones Solutions</li>
                                    <li>Custom Solutions</li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li><Link to='/about-wireng/' className="footer__link">Company Profile</Link></li>
                                    <li>Testimonials</li>
                                    <li
                                        onClick={handleShow2}
                                    >Privacy Policy</li>
                                    <li
                                        onClick={handleShow}
                                    >Terms and Conditions</li>
                                    <li
                                        onClick={handleShow2}
                                    >Website Terms of Service</li>
                                    <li><Link to='/custom-product-inquiry/' className="footer__link">Product Request</Link>
                                    </li>
                                    <li><a href="#newsletter" className='footer__link '>Email Newsletter</a> </li>
                                    <li>Site Map</li>
                                    <li>Technical Papers</li>
                                </ul>

                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li><Link to='/get-in-touch/' className="footer__link">Contact the WirEng® Engineering Team</Link></li>
                                    <li><Link to='/support/' className="footer__link">Contact the WirEng® Sales Team</Link></li>
                                    <li><Link to='/b2b-oem-inquiry/' className="footer__link">Contact the WirEng® Business Team</Link></li>
                                    <li><Link to='/government-military-inquiry/' className="footer__link">Government/Military Relations</Link></li>
                                    <li><Link to='/b2b-oem-inquiry/' className="footer__link">B2B/OEM Relations</Link></li>
                                    <li><Link to='/b2b-oem-inquiry/' className="footer__link">B2B Partnerships</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li>Become a WirEng® System Installer</li>
                                    <li>Become a WirEng® Representative</li>
                                    <li>Become a WirEng® Reseller</li>
                                    <li>Become a WirEng® Distributor</li>
                                </ul>
                            </div>
                            <div className="footer_columntest">
                                <ul className="footer__mobileList">
                                    <li><Link to='/dealer-locator/' className="footer__link">WirEng® in the World</Link></li>
                                    <li><Link to='/about-wireng/' className="footer__link">About WirEng®</Link></li>
                                    <li><Link to='/get-in-touch/' className="footer__link">Contact Us</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li>Register Your WirEng® Product</li>
                                    <li>WirEng® Two-Year Warranty</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li>WirEng® on YouTube</li>
                                    <li>WirEng® on LinkedIn</li>
                                    <li>WirEng® on Tweeter</li>
                                    <li>WirEng® on Facebook</li>
                                    <li>WirEng® on Instagram</li>
                                    <li>WirEng® Careers</li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li>WirEng® Headquarters</li>
                                    <li>Austin, Texas 78729</li>
                                    <li>United States of America</li>
                                    <li>Tel. +1-512-588-3638</li>
                                </ul>
                            </div>
                        </div>
                    </Container>

                    <div className="footer__mobileProduct-title">
                        <p>The WirEng® 2022 Product Line</p>
                    </div>

                    <Container>

                        <div className="footer__mobileContent">
                            <div className="footer__mobileColumn">
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">WideAnt-5G™ Series</li>

                                    <li><Link to='/products/wideant-5g' className="footer__link">WideAnt-5G™</Link></li>
                                    <li><Link to='/products/wideant2-5g' className="footer__link">WideAnt2-5G™</Link></li>
                                    <li><Link to='/products/wideant4-5g-4x2' className="footer__link">WideAnt4-5G-4x2™</Link></li>
                                    <li><Link to='/products/wideant4-5g-4x4' className="footer__link">WideAnt4-5G-4x4™</Link></li>
                                    <li><Link to='/products/wideant8-5g-8x2' className="footer__link">WideAnt8-5G-8x2™</Link></li>
                                    <li><Link to='/products/wideant8-5g-8x4' className="footer__link">WideAnt8-5G-8x4™</Link></li>
                                    <li><Link to='/products/wideant8-5g-8x8' className="footer__link">WideAnt8-5G-8x8™</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">Omnirial-Plus-5G™ Series</li>

                                    <li><Link to='/products/omnirial2-plus-5g' className="footer__link">Omnirial2-Plus-5G™</Link></li>
                                    <li><Link to='/products/omnirial4-plus-5g-4x2' className="footer__link">Omnirial4-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/products/omnirial4-plus-5g-4x4' className="footer__link">Omnirial4-Plus-5G-4x4™</Link></li>
                                    <li><Link to='/products/omnirial8-plus-5g-8x2' className="footer__link">Omnirial8-Plus-5G-8x2™</Link></li>
                                    <li><Link to='/products/omnirial8-plus-5g-8x4' className="footer__link">Omnirial8-Plus-5G-8x4™</Link></li>
                                    <li><Link to='/products/omnirial8-plus-5g-8x8' className="footer__link">Omnirial8-Plus-5G-8x8™</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">WideAnt-Plus-5G™ Series</li>

                                    <li><Link to='/products/wideant-plus-5g' className="footer__link">WideAnt-Plus-5G™</Link></li>
                                    <li><Link to='/products/wideant2-plus-5g' className="footer__link">WideAnt2-Plus-5G™</Link></li>
                                    <li><Link to='/products/wideant2-plus-5g-ref' className="footer__link">WideAnt2-Plus-5G-Ref™</Link></li>
                                    <li><Link to='/products/wideant4-plus-5g-4x2' className="footer__link">WideAnt4-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/products/wideant4-plus-5g-4x4' className="footer__link">WideAnt4-Plus-5G-4x4™</Link></li>
                                    <li><Link to='/products/wideant8-plus-5g-8x2' className="footer__link">WideAnt8-Plus-5G-8x2™</Link></li>
                                    <li><Link to='/products/wideant8-plus-5g-8x4' className="footer__link">WideAnt8-Plus-5G-8x4™</Link></li>
                                    <li><Link to='/products/wideant8-plus-5g-8x8' className="footer__link">WideAnt8-Plus-5G-8x8™</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">DroneAnt™ Series</li>

                                    <li><Link to='/products/droneant' className="footer__link">DroneAnt™</Link></li>
                                    <li><Link to='/products/droneant-plus' className="footer__link">DroneAnt-Plus™</Link></li>
                                    <li><Link to='/products/droneant16' className="footer__link">DroneAnt16™</Link></li>
                                    <li><Link to='/products/droneant16-plus' className="footer__link">DroneAnt16-Plus™</Link></li>
                                </ul>
                            </div>
                            <div className="footer_columntest">
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">WRG400-AU™ Series</li>

                                    <li><Link to='/products/wrg400-ranm-ranm-1m' className="footer__link">WRG400-SNAM-NM-10M™</Link></li>
                                    <li><Link to='/products/wrg400-snam-nm-20m' className="footer__link">WRG400-SNAM-NM-20M™</Link></li>
                                    <li><Link to='/products/wrg400-smam-ranm-10m' className="footer__link">WRG400-SMAM-RA-NM-10M™</Link></li>
                                    <li><Link to='/products/wrg400-smam-ranm-20m' className="footer__link">WRG400-SMAM-RA-NM-20M™</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">GigaMIMO-Plus-5G™ Series</li>

                                    <li><Link to='/products/gigamimo-plus-5g' className="footer__link">GigaMIMO-Plus-5G™</Link></li>
                                    <li><Link to='/products/gigamimo16-plus-5g-2x2' className="footer__link">GigaMIMO16-Plus-5G-2x2™</Link></li>
                                    <li><Link to='/products/gigamimo16-plus-5g-4x2' className="footer__link">GigaMIMO16-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/products/gigamimo16-plus-5g-4x4' className="footer__link">GigaMIMO16-Plus-5G-4x4™</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">MIMOMount™ Series</li>

                                    <li><Link to='/products/mimomount' className="footer__link">MIMOMount-2x2™</Link></li>
                                    <li><Link to='/products/mimomount4' className="footer__link">MIMOMount-4x4™</Link></li>
                                    <li><Link to='/products/mimomount8' className="footer__link">MIMOMount-8x8™</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">ExtAnt-5G™ Series</li>

                                    <li><Link to='/products/extant-smaf-smam' className="footer__link">EXTANT-SMAF-SMAM™</Link></li>
                                    <li><Link to='/products/extant-smaf-tncm' className="footer__link">EXTANT-SMAF-TNCM™</Link></li>
                                    <li><Link to='/products/extant-smaf-ts9m' className="footer__link">EXTANT-SMAF-TS9™</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">OctAnt-5G™ Series</li>

                                    <li><Link to='/products/octant-5g' className="footer__link">OctAnt-5G-8x8™</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">GiAnt-5G™ Series</li>

                                    <li><Link to='/products/giant-5g' className="footer__link">GiAnt-5G™</Link></li>
                                    <li><Link to='/products/giant2-5g' className="footer__link">GiAnt2-5G™</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Container>

                    {/* <div className="footer__newsAndSocial-container">
                        <div className="footer__box-container">
                            <div className="contact__news-container">
                                <div className="contact__contactHeader">
                                    <h1>Subscribe to WirEng Newsletter</h1>
                                    <span>To get in touch with a WirEng team member, please complete the form below (* indicates a required filed)</span>
                                </div>

                                <div className="footer__news-form">
                                    <form>
                                        <input
                                            placeholder="Email"
                                            autoComplete="off"
                                            className='contact__input mt-5'
                                        />
                                        <button
                                            type='submit'
                                            className="button button-block mt-5"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="footer__infoContainer">
                                <div className="footer__infoHeader">
                                    <h1>Contact Info</h1>
                                </div>

                                <div className="footer__infoList-elements">
                                    <ul className="infoList">
                                        <li className="infoList-items"><i className="fa-solid fa-envelope"></i> wireng@gmail.com</li>
                                    </ul>
                                </div>

                                <div className="footer__info-socialMedias">
                                    <ul >
                                        <div className="footer__socialMedias-container">
                                            <li className="footer__socialMedias-items"><i className="fa-brands fa-whatsapp"></i></li>
                                            <li className="footer__socialMedias-items"><i className="fa-brands fa-instagram"></i></li>
                                            <li className="footer__socialMedias-items"><i className="fa-brands fa-facebook"></i></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div> */}
                    <NewsAndSocialFooter />

                    <div className="footer__mobilerights-container">
                        <p>Copyright© 2010-2022 WirEng®. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
