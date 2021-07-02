import React, { memo } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { AnimatePresence, motion } from 'framer-motion';

import { Typography } from '@welovedevs/ui';

import { UserInformations } from './user_actions_row/user_informations/user_informations';
import { SocialActions } from './user_actions_row/social_actions/social_actions';
import { CustomizeButton } from './user_actions_row/customize_button/customize_button';
import { EditHeaderImageButton } from './edit_header_image_button/edit_header_image_button';

import { OPACITY_TRANSITIONS } from '../../utils/framer_motion/common_transitions/opacity_transitions';

import { useIsEditing } from '../hooks/use_is_editing';
import { useAdditionalNodes } from '../hooks/use_additional_nodes';
import { useReceivedGlobalClasses } from '../hooks/use_received_global_classes';

import { styles } from './banner_styles';
import { useMode } from '../hooks/use_mode';
import { EditButton } from './user_actions_row/edit_button/edit_button';

const useStyles = createUseStyles(styles);

const BannerComponent = ({ customizationOptions, onCustomizationChanged }) => {
    const classes = useStyles();
    const [mode] = useMode();
    const [actionsButtons] = useAdditionalNodes('banner.actionsButtons', null);
    const [globalReceivedBannerClasses = {}] = useReceivedGlobalClasses('banner');
    const [isEditing] = useIsEditing();

    const imageInformations = customizationOptions?.imageHeader;
    const bannerImageCredits = customizationOptions?.imageHeader?.credits;

    return (
        <div className={cn(classes.container, globalReceivedBannerClasses.container)}>
            {isEditing && onCustomizationChanged && (
                <EditHeaderImageButton customizationOptions={customizationOptions} />
            )}
            <div className={cn(classes.overlay, globalReceivedBannerClasses.overlay)} />
            <AnimatePresence>
                {/* <div className={"noise pattern"}></div> */}

                <div className={"pattern"}>
                    <svg version="1.1" id="banner-anim" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 1820 1080" style={{enableBackground:"new 0 0 1820 1080"}} xmlXSpace="preserve">

                    <g id="banner-container">
                        <defs>
                            <rect id="masque" y="0.4" width="1820" height="1080"/>
                        </defs>
                        <clipPath id="cache">
                            <use xlinkHref="#masque"  style={{"overflow":"visible"}}/>
                        </clipPath>
                        <g id="banner-light-blue">
                            <line x1="630.8" y1="894.3" x2="476.3" y2="1048.8"/>
                            <line x1="858.2" y1="823.9" x2="1012.7" y2="669.4"/>
                            <line x1="1066.9" y1="458.2" x2="912.4" y2="612.7"/>
                            <line x1="1294.3" y1="387.8" x2="1448.8" y2="233.3"/>
                            <line x1="1503" y1="22.1" x2="1348.5" y2="176.6"/>
                            <line x1="895.6" y1="1166.6" x2="1050.1" y2="1012.1"/>
                            <line x1="1104.3" y1="800.9" x2="949.8" y2="955.4"/>
                            <line x1="1331.7" y1="730.5" x2="1486.2" y2="576"/>
                            <line x1="1540.4" y1="364.8" x2="1385.9" y2="519.3"/>
                            <line x1="1767.8" y1="294.4" x2="1922.3" y2="139.9"/>
                            <line x1="1976.5" y1="-71.3" x2="1822" y2="83.2"/>
                            <line x1="1369.1" y1="1073.2" x2="1523.6" y2="918.7"/>
                            <line x1="1577.8" y1="707.5" x2="1423.3" y2="862"/>
                            <line x1="1805.2" y1="637.1" x2="1959.7" y2="482.6"/>
                            <line x1="1624" y1="1041.4" x2="1469.4" y2="1195.9"/>
                            <line x1="-134.7" y1="674.9" x2="19.8" y2="520.4"/>
                            <line x1="74" y1="309.2" x2="-80.5" y2="463.7"/>
                            <line x1="301.4" y1="238.8" x2="455.9" y2="84.3"/>
                            <line x1="510.1" y1="-126.9" x2="355.6" y2="27.6"/>
                            <line x1="-88.6" y1="1008.9" x2="65.9" y2="854.4"/>
                            <line x1="120.1" y1="643.1" x2="-34.4" y2="797.7"/>
                            <line x1="347.5" y1="572.8" x2="502" y2="418.3"/>
                            <line x1="556.2" y1="207.1" x2="401.7" y2="361.6"/>
                            <line x1="783.6" y1="136.7" x2="938.1" y2="-17.8"/>
                            <line x1="157.6" y1="985.8" x2="3" y2="1140.3"/>
                            <line x1="384.9" y1="915.5" x2="539.4" y2="760.9"/>
                            <line x1="593.6" y1="549.7" x2="439.1" y2="704.3"/>
                            <line x1="821" y1="479.4" x2="975.5" y2="324.9"/>
                            <line x1="1029.7" y1="113.6" x2="875.2" y2="268.2"/>
                            <line x1="1257.1" y1="43.3" x2="1411.6" y2="-111.2"/>
                        </g>
                        <g id="banner-white">
                            <line x1="794.4" y1="883.4" x2="639.8" y2="1037.9"/>
                            <line x1="694.6" y1="834.8" x2="849.2" y2="680.3"/>
                            <line x1="1230.4" y1="447.3" x2="1075.9" y2="601.8"/>
                            <line x1="1130.7" y1="398.7" x2="1285.2" y2="244.2"/>
                            <line x1="1666.5" y1="11.2" x2="1512" y2="165.7"/>
                            <line x1="732" y1="1177.5" x2="886.6" y2="1023"/>
                            <line x1="1267.9" y1="790" x2="1113.3" y2="944.5"/>
                            <line x1="1168.1" y1="741.4" x2="1322.7" y2="586.9"/>
                            <line x1="1703.9" y1="353.9" x2="1549.4" y2="508.4"/>
                            <line x1="1604.2" y1="305.3" x2="1758.7" y2="150.8"/>
                            <line x1="1205.5" y1="1084.1" x2="1360.1" y2="929.6"/>
                            <line x1="1741.4" y1="696.5" x2="1586.8" y2="851.1"/>
                            <line x1="1641.6" y1="648" x2="1796.2" y2="493.5"/>
                            <line x1="1787.5" y1="1030.5" x2="1633" y2="1185"/>
                            <line x1="1687.8" y1="981.9" x2="1842.3" y2="827.4"/>
                            <line x1="200.1" y1="-44.4" x2="45.6" y2="110.1"/>
                            <line x1="237.5" y1="298.3" x2="83" y2="452.8"/>
                            <line x1="137.8" y1="249.7" x2="292.3" y2="95.2"/>
                            <line x1="673.6" y1="-137.8" x2="519.1" y2="16.7"/>
                            <line x1="283.7" y1="632.2" x2="129.2" y2="786.8"/>
                            <line x1="184" y1="583.7" x2="338.5" y2="429.2"/>
                            <line x1="719.8" y1="196.2" x2="565.2" y2="350.7"/>
                            <line x1="620" y1="147.6" x2="774.6" y2="-6.9"/>
                            <line x1="321.1" y1="974.9" x2="166.6" y2="1129.4"/>
                            <line x1="221.4" y1="926.4" x2="375.9" y2="771.8"/>
                            <line x1="757.2" y1="538.8" x2="602.7" y2="693.4"/>
                            <line x1="657.5" y1="490.3" x2="812" y2="335.8"/>
                            <line x1="1193.3" y1="102.7" x2="1038.7" y2="257.3"/>
                            <line x1="1093.5" y1="54.2" x2="1248.1" y2="-100.3"/>
                        </g>
                        <g id="banner-blue">
                            <line x1="225.8" y1="1151" x2="534.9" y2="841.9"/>
                            <line x1="827.1" y1="1003.3" x2="518" y2="1312.3"/>
                            <line x1="661.9" y1="714.9" x2="971" y2="405.9"/>
                            <line x1="1263.1" y1="567.2" x2="954.1" y2="876.3"/>
                            <line x1="1098" y1="278.8" x2="1407.1" y2="-30.2"/>
                            <line x1="1699.2" y1="131.1" x2="1390.2" y2="440.2"/>
                            <line x1="699.3" y1="1057.6" x2="1008.4" y2="748.5"/>
                            <line x1="1300.6" y1="909.9" x2="991.5" y2="1218.9"/>
                            <line x1="1135.4" y1="621.5" x2="1444.5" y2="312.4"/>
                            <line x1="1736.6" y1="473.8" x2="1427.6" y2="782.8"/>
                            <line x1="1571.5" y1="185.4" x2="1880.6" y2="-123.6"/>
                            <line x1="1172.8" y1="964.2" x2="1481.9" y2="655.1"/>
                            <line x1="1774.1" y1="816.5" x2="1465" y2="1125.5"/>
                            <line x1="1608.9" y1="528.1" x2="1918" y2="219"/>
                            <line x1="1219" y1="1298.1" x2="1528" y2="989.1"/>
                            <line x1="1655.1" y1="862" x2="1964.1" y2="553"/>
                            <line x1="232.8" y1="75.5" x2="-76.2" y2="384.6"/>
                            <line x1="270.2" y1="418.2" x2="-38.8" y2="727.3"/>
                            <line x1="105.1" y1="129.8" x2="414.2" y2="-179.2"/>
                            <line x1="706.3" y1="-17.9" x2="397.3" y2="291.2"/>
                            <line x1="-284.8" y1="899.9" x2="24.2" y2="590.8"/>
                            <line x1="316.4" y1="752.2" x2="7.3" y2="1061.2"/>
                            <line x1="151.3" y1="463.8" x2="460.3" y2="154.7"/>
                            <line x1="752.5" y1="316.1" x2="443.4" y2="625.1"/>
                            <line x1="587.3" y1="27.7" x2="896.4" y2="-281.4"/>
                            <line x1="1188.6" y1="-120" x2="879.5" y2="189"/>
                            <line x1="-247.4" y1="1242.5" x2="61.6" y2="933.5"/>
                            <line x1="188.7" y1="806.4" x2="497.7" y2="497.4"/>
                            <line x1="789.9" y1="658.8" x2="480.8" y2="967.8"/>
                            <line x1="624.8" y1="370.4" x2="933.8" y2="61.3"/>
                            <line x1="1226" y1="222.7" x2="916.9" y2="531.7"/>
                            <line x1="1662.1" y1="-213.4" x2="1353" y2="95.6"/>
                        </g>
                    </g>
                    </svg>
                </div>


                {/* {imageInformations && (
                    <motion.img
                        className={classes.image}
                        src={imageInformations?.url}
                        alt={imageInformations?.alt}
                        variants={OPACITY_TRANSITIONS}
                        transition={{ duration: 1 }}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                )} */}
            </AnimatePresence>
            <div className={cn(classes.content, globalReceivedBannerClasses.content)}>
                <UserInformations />
                <SocialActions>
                    <div style={{display: "none"}}>
                        {actionsButtons}
                        {mode === 'edit' && <EditButton />}
                        {mode === 'edit' && <CustomizeButton customizationOptions={customizationOptions} />}
                    </div>
                    <div className={"social-container"}>
                        <a href={"https://sponsor.alpdogan.co"} target={"_blank"}>
                            <svg fill="#5c7273" height="32" width="32" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 60 60">
                                <g>
                                    <path d="M28,56C12.561,56,0,43.439,0,28S12.561,0,28,0c15.439,0,28,12.561,28,28S43.439,56,28,56z M28,2C13.664,2,2,13.664,2,28   s11.664,26,26,26s26-11.664,26-26S42.336,2,28,2z" />
                                    <path d="M47.594,19c-0.363,0-0.714-0.198-0.891-0.544C43.082,11.39,35.916,7,28,7S12.918,11.39,9.297,18.456   c-0.252,0.492-0.855,0.685-1.346,0.434c-0.491-0.252-0.686-0.854-0.434-1.346C11.482,9.807,19.331,5,28,5   s16.518,4.807,20.483,12.544c0.251,0.492,0.058,1.094-0.434,1.346C47.903,18.965,47.748,19,47.594,19z" />
                                    <path d="M28,51c-3.276,0-6.442-0.678-9.41-2.014c-0.504-0.227-0.728-0.818-0.501-1.322c0.227-0.503,0.819-0.728,1.322-0.501   C22.119,48.382,25.009,49,28,49c3.048,0,5.991-0.642,8.744-1.908c0.502-0.229,1.096-0.01,1.327,0.491   c0.23,0.502,0.011,1.096-0.491,1.327C34.562,50.296,31.339,51,28,51z" />
                                    <path d="M28,60C12.561,60,0,47.439,0,32c0-0.628,0.027-1.287,0.084-2.073C0.122,29.404,0.557,29,1.082,29   c0.524,0,0.959,0.404,0.997,0.927C3.069,43.426,14.454,54,28,54c13.545,0,24.931-10.574,25.921-24.073   C53.959,29.404,54.395,29,54.918,29l0,0c0.524,0,0.959,0.404,0.998,0.927C55.973,30.713,56,31.372,56,32C56,47.439,43.439,60,28,60   z M4.597,43.323C8.813,52.003,17.719,58,28,58s19.187-5.998,23.403-14.678C46.367,50.968,37.698,56,28,56   C18.303,56,9.633,50.967,4.597,43.323z" />
                                    <path d="M38.92,45c-0.346,0-0.682-0.179-0.867-0.5c-0.276-0.478-0.112-1.09,0.366-1.366c4.332-2.501,7.022-7.15,7.022-12.134   c0-3.053-0.969-5.957-2.803-8.395c-0.332-0.441-0.243-1.068,0.198-1.4c0.442-0.331,1.068-0.242,1.4,0.198   c2.097,2.788,3.205,6.107,3.205,9.597c0,5.695-3.074,11.009-8.022,13.866C39.262,44.957,39.089,45,38.92,45z" />
                                    <path d="M42.085,41.599c-1.45,0-2.725-0.492-3.663-1.43c-1.167-1.167-1.643-2.855-1.341-4.753c0.068-0.427,0.403-0.762,0.831-0.831   c1.898-0.3,3.586,0.174,4.753,1.341s1.643,2.855,1.341,4.753c-0.068,0.427-0.403,0.762-0.831,0.831   C42.803,41.569,42.439,41.599,42.085,41.599z M43.019,40.522h0.01H43.019z M38.994,36.498c0,0.919,0.29,1.704,0.843,2.257   s1.338,0.843,2.257,0.843c0-0.919-0.29-1.704-0.843-2.257S39.913,36.498,38.994,36.498z" />
                                    <path d="M42.941,34c-1.65,0-3.181-0.857-4.31-2.413c-0.254-0.351-0.254-0.824,0-1.175C39.761,28.857,41.291,28,42.941,28   s3.181,0.857,4.31,2.413c0.254,0.351,0.254,0.824,0,1.175C46.122,33.143,44.592,34,42.941,34z M40.75,31   c1.3,1.299,3.084,1.299,4.384,0C43.833,29.7,42.049,29.7,40.75,31z" />
                                    <path d="M46.521,39.001c-0.354,0-0.718-0.029-1.091-0.088c-0.427-0.068-0.762-0.403-0.831-0.831   c-0.302-1.898,0.174-3.586,1.341-4.753c1.167-1.167,2.855-1.644,4.753-1.341c0.427,0.068,0.762,0.403,0.831,0.831   c0.302,1.898-0.174,3.586-1.341,4.753C49.246,38.509,47.971,39.001,46.521,39.001z M49.612,33.9c-0.919,0-1.704,0.29-2.257,0.843   c-0.553,0.553-0.843,1.338-0.843,2.257c0.919,0,1.704-0.29,2.257-0.843C49.322,35.604,49.612,34.819,49.612,33.9z" />
                                    <path d="M46.909,28.357c-0.354,0-0.718-0.029-1.091-0.088c-0.427-0.068-0.762-0.403-0.831-0.831   c-0.302-1.899,0.175-3.587,1.342-4.754c1.167-1.167,2.854-1.643,4.753-1.341c0.427,0.068,0.762,0.403,0.831,0.831   c0.302,1.898-0.174,3.586-1.341,4.753C49.633,27.866,48.358,28.357,46.909,28.357z M50,23.256c-0.919,0-1.704,0.29-2.257,0.842   c-0.553,0.554-0.843,1.338-0.843,2.258c0.919,0,1.704-0.29,2.257-0.843C49.71,24.96,50,24.175,50,23.256z" />
                                    <path d="M17.08,45c-0.17,0-0.342-0.043-0.499-0.134C11.632,42.008,8.558,36.695,8.558,31c0-3.49,1.108-6.809,3.205-9.597   c0.332-0.441,0.959-0.53,1.4-0.198c0.442,0.332,0.53,0.959,0.198,1.4c-1.834,2.439-2.803,5.342-2.803,8.395   c0,4.983,2.691,9.633,7.023,12.134c0.478,0.276,0.642,0.888,0.366,1.366C17.762,44.821,17.426,45,17.08,45z" />
                                    <path d="M13.915,41.599c-0.354,0-0.718-0.029-1.091-0.088c-0.427-0.068-0.762-0.403-0.83-0.831   c-0.302-1.898,0.174-3.586,1.341-4.753c1.167-1.167,2.856-1.643,4.753-1.341c0.427,0.068,0.763,0.403,0.831,0.831   c0.302,1.898-0.174,3.586-1.341,4.753C16.64,41.107,15.365,41.599,13.915,41.599z M17.006,36.498c-0.919,0-1.704,0.29-2.257,0.843   c-0.553,0.553-0.842,1.338-0.843,2.257c0.919,0,1.704-0.29,2.257-0.843C16.717,38.201,17.006,37.417,17.006,36.498z" />
                                    <path d="M13.058,34c-1.65,0-3.181-0.857-4.309-2.413c-0.254-0.351-0.254-0.824,0-1.175C9.878,28.857,11.408,28,13.058,28   s3.181,0.857,4.31,2.413c0.254,0.351,0.254,0.824,0,1.175C16.239,33.143,14.708,34,13.058,34z M10.866,31   c1.301,1.299,3.083,1.299,4.384,0C13.95,29.7,12.167,29.7,10.866,31z" />
                                    <path d="M9.479,39.001c-1.45,0-2.725-0.492-3.663-1.43c-1.167-1.167-1.643-2.855-1.341-4.753c0.068-0.427,0.403-0.762,0.83-0.831   c1.899-0.303,3.587,0.175,4.753,1.341c1.167,1.167,1.643,2.855,1.341,4.753c-0.068,0.427-0.403,0.762-0.831,0.831   C10.198,38.972,9.833,39.001,9.479,39.001z M6.388,33.9c0,0.919,0.29,1.704,0.843,2.257S8.569,37,9.488,37   c0-0.919-0.29-1.704-0.843-2.257S7.307,33.9,6.388,33.9z" />
                                    <path d="M9.091,28.357c-1.45,0-2.725-0.492-3.663-1.43c-1.167-1.167-1.643-2.855-1.341-4.753c0.068-0.427,0.403-0.762,0.83-0.831   c1.898-0.302,3.586,0.174,4.753,1.341c1.167,1.167,1.644,2.855,1.342,4.754c-0.068,0.427-0.403,0.762-0.831,0.831   C9.81,28.328,9.445,28.357,9.091,28.357z M6,23.256c0,0.919,0.29,1.704,0.843,2.257s1.338,0.843,2.257,0.843   c0-0.919-0.29-1.704-0.843-2.258C7.704,23.546,6.919,23.256,6,23.256z" />
                                    <path d="M28,18.999c-0.001,0-0.002,0-0.003,0c-0.458-0.001-0.857-0.312-0.968-0.756C27.022,18.212,26.176,15,24,15   c-0.552,0-1-0.448-1-1s0.448-1,1-1c2.176,0,3.022-3.212,3.031-3.245C27.144,9.312,27.543,9.001,28,9.001c0.001,0,0.002,0,0.003,0   c0.458,0.001,0.857,0.312,0.968,0.756C28.978,9.788,29.824,13,32,13c0.552,0,1,0.448,1,1s-0.448,1-1,1   c-2.176,0-3.022,3.212-3.031,3.245C28.856,18.688,28.457,18.999,28,18.999z M26.724,14c0.53,0.442,0.95,0.981,1.276,1.512   c0.326-0.531,0.746-1.07,1.276-1.512c-0.53-0.442-0.95-0.981-1.276-1.512C27.674,13.019,27.254,13.558,26.724,14z" />
                                    <path d="M38,23.999c-0.001,0-0.002,0-0.003,0c-0.458-0.001-0.856-0.312-0.968-0.756C37.022,23.212,36.176,20,34,20   c-0.552,0-1-0.448-1-1s0.448-1,1-1c2.176,0,3.022-3.212,3.03-3.245c0.113-0.443,0.513-0.753,0.969-0.753c0.001,0,0.002,0,0.003,0   c0.458,0.001,0.856,0.312,0.968,0.756C38.978,14.788,39.824,18,42,18c0.552,0,1,0.448,1,1s-0.448,1-1,1   c-2.176,0-3.022,3.212-3.03,3.245C38.856,23.688,38.457,23.999,38,23.999z M36.724,19c0.53,0.442,0.95,0.981,1.276,1.512   c0.326-0.531,0.746-1.07,1.276-1.512c-0.53-0.442-0.95-0.981-1.276-1.512C37.674,18.019,37.254,18.558,36.724,19z" />
                                    <path d="M18,23.999c-0.001,0-0.002,0-0.003,0c-0.458-0.001-0.857-0.312-0.968-0.756C17.022,23.212,16.176,20,14,20   c-0.552,0-1-0.448-1-1s0.448-1,1-1c2.176,0,3.022-3.212,3.031-3.245c0.113-0.443,0.512-0.753,0.969-0.753c0.001,0,0.002,0,0.003,0   c0.458,0.001,0.857,0.312,0.968,0.756C18.978,14.788,19.824,18,22,18c0.552,0,1,0.448,1,1s-0.448,1-1,1   c-2.176,0-3.022,3.212-3.031,3.245C18.856,23.688,18.457,23.999,18,23.999z M16.724,19c0.53,0.442,0.95,0.981,1.276,1.512   c0.326-0.531,0.746-1.07,1.276-1.512c-0.53-0.442-0.95-0.981-1.276-1.512C17.674,18.019,17.254,18.558,16.724,19z" />
                                </g>
                            </svg>
                        </a>
                        
                        <a href={"https://www.linkedin.com/in/alpdogan"} target={"_blank"}>
                             <svg fill="#5c7273" height="32" viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/></svg>
                        </a>
                        <a href={"https://github.com/alpdogan/co"} target={"_blank"}>
                            <svg fill="#5c7273" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        </a>
                    </div>
                </SocialActions>
            </div>
            {bannerImageCredits?.name && (
                <Typography
                    classes={{ container: cn(classes.credits, globalReceivedBannerClasses.credits) }}
                    variant="body3"
                >
                    <FormattedMessage
                        id="Unsplash.credit"
                        defaultMessage="Photo by {name} on {unsplashLink}"
                        values={{
                            name: (
                                <a
                                    className={classes.author}
                                    href={bannerImageCredits.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={bannerImageCredits.name}
                                >
                                    {bannerImageCredits.name}
                                </a>
                            ),
                            unsplashLink: (
                                <a
                                    href={encodeURI(
                                        'https://unsplash.com/?utm_source=W3D Developer Profile&utm_medium=referral'
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FormattedMessage id="Unsplash.brandName" defaultMessage="Unsplash" />
                                </a>
                            )
                        }}
                    />
                </Typography>
            )}
        </div>
    );
};

export const Banner = memo(BannerComponent);
