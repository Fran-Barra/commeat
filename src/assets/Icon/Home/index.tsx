
import {IconProps} from "../../../utils/types.tsx";


const Home = ({width = 24, height = 24, color, filled}: IconProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
            {filled ? (
                <>
                    <path className={`${color}`}
                        d="M4.66667 17.5833C4.20833 17.5833 3.81611 17.4203 3.49 17.0942C3.16333 16.7675 3 16.375 3 15.9167V8.41667C3 8.15278 3.05917 7.90278 3.1775 7.66667C3.29528 7.43056 3.45833 7.23611 3.66667 7.08333L8.66667 3.33333C8.81944 3.22222 8.97917 3.13889 9.14583 3.08333C9.3125 3.02778 9.48611 3 9.66667 3C9.84722 3 10.0208 3.02778 10.1875 3.08333C10.3542 3.13889 10.5139 3.22222 10.6667 3.33333L15.6667 7.08333C15.875 7.23611 16.0383 7.43056 16.1567 7.66667C16.2744 7.90278 16.3333 8.15278 16.3333 8.41667V15.9167C16.3333 16.375 16.1703 16.7675 15.8442 17.0942C15.5175 17.4203 15.125 17.5833 14.6667 17.5833H11.3333V11.75H8V17.5833H4.66667Z"
                        fill="#93969A"/>
                </>
            ) : (
                <>
                    <mask id="path-1-inside-1_510_2369" fill="white" >
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.51977 8.33622L4.51851 8.33875C4.50464 8.36643 4.5 8.38632 4.5 8.41667V15.9167C4.5 15.9418 4.5022 15.9573 4.50373 15.9653C4.5052 15.973 4.50738 15.9785 4.50738 15.9785C4.50738 15.9785 4.51005 15.9846 4.51524 15.9922C4.52059 16.0001 4.53121 16.0141 4.55066 16.0335C4.56986 16.0527 4.58362 16.0631 4.59127 16.0683C4.59868 16.0734 4.60456 16.076 4.60456 16.076C4.60456 16.076 4.60999 16.0781 4.61773 16.0796C4.62572 16.0811 4.64136 16.0833 4.66667 16.0833H6.5V10.25H12.8333V16.0833H14.6667C14.692 16.0833 14.7077 16.0811 14.7157 16.0796C14.7197 16.0788 14.7227 16.078 14.7249 16.0774C14.727 16.0767 14.7293 16.0758 14.7293 16.0758C14.7293 16.0758 14.748 16.0687 14.7835 16.0335C14.8193 15.9975 14.8258 15.9793 14.8258 15.9793C14.8266 15.9775 14.8281 15.9736 14.8296 15.9657C14.8311 15.9577 14.8333 15.942 14.8333 15.9167V8.41667C14.8333 8.38561 14.8286 8.36498 14.815 8.3375C14.8011 8.3101 14.7916 8.30172 14.7796 8.29294L14.7731 8.28817L9.7784 4.54213C9.74418 4.51801 9.72276 4.50956 9.71316 4.50636C9.70368 4.5032 9.69053 4.5 9.66667 4.5C9.6428 4.5 9.62965 4.5032 9.62017 4.50636C9.61057 4.50956 9.58915 4.51801 9.55493 4.54213L4.56022 8.28817L4.55371 8.29294C4.54216 8.30141 4.53332 8.30907 4.51977 8.33622ZM8.66667 3.33333C8.81944 3.22222 8.97917 3.13889 9.14583 3.08333C9.3125 3.02778 9.48611 3 9.66667 3C9.84722 3 10.0208 3.02778 10.1875 3.08333C10.3542 3.13889 10.5139 3.22222 10.6667 3.33333L15.6667 7.08333C15.875 7.23611 16.0383 7.43056 16.1567 7.66667C16.2744 7.90278 16.3333 8.15278 16.3333 8.41667V15.9167C16.3333 16.375 16.1703 16.7675 15.8442 17.0942C15.5175 17.4203 15.125 17.5833 14.6667 17.5833H11.3333V11.75H8V17.5833H4.66667C4.20833 17.5833 3.81611 17.4203 3.49 17.0942C3.16333 16.7675 3 16.375 3 15.9167V8.41667C3 8.15278 3.05917 7.90278 3.1775 7.66667C3.29528 7.43056 3.45833 7.23611 3.66667 7.08333L8.66667 3.33333Z"/>
                    </mask>
                    <path className={`${color}`}
                        d="M4.51851 8.33875L5.41248 8.78688L5.41336 8.78512L4.51851 8.33875ZM4.51977 8.33622L3.62493 7.88985L3.62492 7.88985L4.51977 8.33622ZM4.50373 15.9653L5.4858 15.7768L5.4858 15.7768L4.50373 15.9653ZM4.50738 15.9785L3.57666 16.3442L3.58367 16.3621L3.59136 16.3796L4.50738 15.9785ZM4.51524 15.9922L5.34166 15.4292L5.34162 15.4291L4.51524 15.9922ZM4.55066 16.0335L5.25777 15.3264L5.25777 15.3264L4.55066 16.0335ZM4.59127 16.0683L5.15417 15.2418L5.15408 15.2418L4.59127 16.0683ZM4.60456 16.076L4.2045 16.9924L4.22113 16.9997L4.23801 17.0064L4.60456 16.076ZM4.61773 16.0796L4.80601 15.0975L4.80597 15.0975L4.61773 16.0796ZM6.5 16.0833V17.0833H7.5V16.0833H6.5ZM6.5 10.25V9.25H5.5V10.25H6.5ZM12.8333 10.25H13.8333V9.25H12.8333V10.25ZM12.8333 16.0833H11.8333V17.0833H12.8333V16.0833ZM14.7157 16.0796L14.5276 15.0974L14.5276 15.0974L14.7157 16.0796ZM14.7249 16.0774L14.4363 15.1199L14.436 15.12L14.7249 16.0774ZM14.7293 16.0758L14.3745 15.1409L14.3658 15.1442L14.3571 15.1477L14.7293 16.0758ZM14.7835 16.0335L15.4882 16.7431L15.4931 16.7381L14.7835 16.0335ZM14.8258 15.9793L13.9024 15.5955L13.8932 15.6176L13.8851 15.6401L14.8258 15.9793ZM14.8296 15.9657L15.8117 16.154L15.8117 16.1539L14.8296 15.9657ZM14.815 8.3375L15.7121 7.8954L15.707 7.88537L14.815 8.3375ZM14.7796 8.29294L14.1883 9.09935L14.1883 9.09936L14.7796 8.29294ZM14.7731 8.28817L14.1731 9.08822L14.1818 9.09458L14.7731 8.28817ZM9.7784 4.54213L10.3784 3.74213L10.3666 3.73331L10.3546 3.72483L9.7784 4.54213ZM9.71316 4.50636L9.39693 5.45504L9.39694 5.45504L9.71316 4.50636ZM9.62017 4.50636L9.9364 5.45504L9.93641 5.45504L9.62017 4.50636ZM9.55493 4.54213L8.97872 3.72483L8.9667 3.73331L8.95493 3.74213L9.55493 4.54213ZM4.56022 8.28817L5.15161 9.09462L5.16022 9.08817L4.56022 8.28817ZM4.55371 8.29294L5.14507 9.09935L5.14508 9.09935L4.55371 8.29294ZM8.66667 3.33333L8.07849 2.5246L8.07255 2.52892L8.06667 2.53333L8.66667 3.33333ZM9.14583 3.08333L9.46206 4.03202L9.14583 3.08333ZM10.1875 3.08333L9.87127 4.03202L10.1875 3.08333ZM10.6667 3.33333L11.2667 2.53333L11.2608 2.52892L11.2548 2.5246L10.6667 3.33333ZM15.6667 7.08333L15.0666 7.88338L15.0753 7.88974L15.6667 7.08333ZM16.1567 7.66667L17.0515 7.22029L17.0507 7.21861L16.1567 7.66667ZM15.8442 17.0942L16.5507 17.8019L16.5519 17.8007L15.8442 17.0942ZM11.3333 17.5833H10.3333V18.5833H11.3333V17.5833ZM11.3333 11.75H12.3333V10.75H11.3333V11.75ZM8 11.75V10.75H7V11.75H8ZM8 17.5833V18.5833H9V17.5833H8ZM3.49 17.0942L2.78289 17.8013L2.78289 17.8013L3.49 17.0942ZM3.1775 7.66667L4.07151 8.11472L4.07235 8.11304L3.1775 7.66667ZM3.66667 7.08333L4.25806 7.88978L4.26667 7.88333L3.66667 7.08333ZM5.41336 8.78512L5.41462 8.78259L3.62492 7.88985L3.62366 7.89238L5.41336 8.78512ZM5.5 8.41667C5.5 8.45415 5.49708 8.52288 5.47717 8.60702C5.45731 8.69094 5.42922 8.75348 5.41248 8.78688L3.62454 7.89062C3.54098 8.05731 3.5 8.23064 3.5 8.41667H5.5ZM5.5 15.9167V8.41667H3.5V15.9167H5.5ZM5.4858 15.7768C5.49686 15.8344 5.5 15.8821 5.5 15.9167H3.5C3.5 16.0015 3.50755 16.0803 3.52166 16.1538L5.4858 15.7768ZM4.50738 15.9785C5.4381 15.6128 5.43814 15.6129 5.43818 15.613C5.4382 15.613 5.43824 15.6131 5.43827 15.6132C5.43833 15.6133 5.43838 15.6135 5.43844 15.6136C5.43856 15.6139 5.43867 15.6142 5.43879 15.6145C5.43902 15.6151 5.43925 15.6157 5.43948 15.6163C5.43994 15.6175 5.4404 15.6187 5.44087 15.6199C5.44179 15.6223 5.44272 15.6248 5.44366 15.6272C5.44552 15.6322 5.44742 15.6374 5.44932 15.6428C5.45311 15.6534 5.45709 15.6652 5.46108 15.6781C5.46873 15.7027 5.47802 15.7362 5.4858 15.7768L3.52166 16.1538C3.53091 16.202 3.54202 16.2421 3.55113 16.2715C3.55585 16.2866 3.56046 16.3003 3.5647 16.3123C3.56684 16.3183 3.56891 16.3239 3.5709 16.3292C3.5719 16.3319 3.57288 16.3345 3.57384 16.337C3.57432 16.3382 3.57479 16.3395 3.57526 16.3407C3.5755 16.3413 3.57573 16.3419 3.57596 16.3425C3.57608 16.3428 3.57619 16.3431 3.57631 16.3433C3.57637 16.3435 3.57643 16.3436 3.57648 16.3438C3.57651 16.3439 3.57656 16.344 3.57657 16.344C3.57661 16.3441 3.57666 16.3442 4.50738 15.9785ZM5.34162 15.4291C5.3635 15.4612 5.38015 15.4902 5.39244 15.5133C5.39876 15.5252 5.40443 15.5365 5.40948 15.547C5.41202 15.5523 5.41444 15.5575 5.41675 15.5625C5.4179 15.565 5.41903 15.5675 5.42014 15.57C5.42069 15.5712 5.42124 15.5725 5.42178 15.5737C5.42206 15.5743 5.42233 15.5749 5.42259 15.5755C5.42273 15.5758 5.42286 15.5761 5.423 15.5765C5.42306 15.5766 5.42313 15.5768 5.4232 15.5769C5.42323 15.577 5.42328 15.5771 5.4233 15.5771C5.42335 15.5772 5.4234 15.5774 4.50738 15.9785C3.59136 16.3796 3.59141 16.3797 3.59146 16.3799C3.59147 16.3799 3.59152 16.38 3.59156 16.3801C3.59162 16.3802 3.59169 16.3804 3.59176 16.3805C3.59189 16.3808 3.59203 16.3812 3.59216 16.3815C3.59243 16.3821 3.59271 16.3827 3.59298 16.3833C3.59354 16.3846 3.5941 16.3858 3.59467 16.3871C3.59582 16.3897 3.59702 16.3923 3.59826 16.395C3.60073 16.4004 3.6034 16.4061 3.60627 16.4121C3.61199 16.4241 3.61864 16.4373 3.62629 16.4517C3.64121 16.4798 3.66179 16.5156 3.68886 16.5553L5.34162 15.4291ZM5.25777 15.3264C5.27983 15.3485 5.30976 15.3823 5.34166 15.4292L3.68882 16.5553C3.73141 16.6178 3.78259 16.6796 3.84355 16.7406L5.25777 15.3264ZM5.15408 15.2418C5.20121 15.2739 5.2354 15.304 5.25777 15.3264L3.84355 16.7406C3.90433 16.8014 3.96604 16.8524 4.02846 16.8949L5.15408 15.2418ZM4.60456 16.076C5.00462 15.1595 5.00474 15.1595 5.00485 15.1596C5.00489 15.1596 5.00501 15.1596 5.00508 15.1597C5.00524 15.1597 5.00539 15.1598 5.00555 15.1599C5.00586 15.16 5.00617 15.1602 5.00648 15.1603C5.0071 15.1606 5.00772 15.1608 5.00835 15.1611C5.0096 15.1617 5.01085 15.1622 5.01211 15.1628C5.01463 15.1639 5.01717 15.1651 5.01974 15.1662C5.02488 15.1686 5.03014 15.171 5.03553 15.1736C5.04624 15.1787 5.0577 15.1845 5.06975 15.1909C5.09322 15.2033 5.12218 15.22 5.15417 15.2418L4.02837 16.8949C4.06777 16.9217 4.10338 16.9422 4.13163 16.9572C4.14608 16.9649 4.15947 16.9716 4.17152 16.9774C4.17757 16.9803 4.18335 16.983 4.18884 16.9855C4.19158 16.9867 4.19426 16.9879 4.19687 16.9891C4.19817 16.9897 4.19946 16.9902 4.20073 16.9908C4.20137 16.9911 4.202 16.9914 4.20263 16.9916C4.20294 16.9918 4.20325 16.9919 4.20356 16.992C4.20372 16.9921 4.20388 16.9922 4.20403 16.9922C4.20411 16.9923 4.20422 16.9923 4.20426 16.9923C4.20438 16.9924 4.2045 16.9924 4.60456 16.076ZM4.80597 15.0975C4.84582 15.1051 4.8791 15.1142 4.90425 15.122C4.91728 15.1261 4.9293 15.1301 4.94025 15.134C4.94575 15.136 4.95106 15.1379 4.95619 15.1398C4.95875 15.1408 4.96127 15.1417 4.96376 15.1427C4.965 15.1432 4.96623 15.1437 4.96746 15.1441C4.96807 15.1444 4.96868 15.1446 4.96929 15.1448C4.96959 15.145 4.96989 15.1451 4.9702 15.1452C4.97035 15.1453 4.9705 15.1453 4.97065 15.1454C4.97073 15.1454 4.97084 15.1455 4.97088 15.1455C4.97099 15.1455 4.9711 15.1456 4.60456 16.076C4.23801 17.0064 4.23812 17.0064 4.23824 17.0065C4.23828 17.0065 4.23839 17.0065 4.23847 17.0065C4.23862 17.0066 4.23877 17.0067 4.23892 17.0067C4.23922 17.0068 4.23953 17.007 4.23984 17.0071C4.24045 17.0073 4.24107 17.0076 4.24169 17.0078C4.24293 17.0083 4.2442 17.0088 4.24548 17.0093C4.24805 17.0103 4.2507 17.0113 4.25343 17.0123C4.25888 17.0143 4.26468 17.0165 4.27081 17.0186C4.28301 17.023 4.29688 17.0276 4.31223 17.0324C4.34203 17.0416 4.3819 17.0526 4.42948 17.0617L4.80597 15.0975ZM4.66667 15.0833C4.70093 15.0833 4.7485 15.0864 4.80601 15.0975L4.42944 17.0617C4.50294 17.0758 4.58179 17.0833 4.66667 17.0833V15.0833ZM6.5 15.0833H4.66667V17.0833H6.5V15.0833ZM14.6667 15.0833H12.8333V17.0833H14.6667V15.0833ZM14.5276 15.0974C14.5849 15.0865 14.6324 15.0833 14.6667 15.0833V17.0833C14.7516 17.0833 14.8304 17.0758 14.9039 17.0617L14.5276 15.0974ZM14.436 15.12C14.4706 15.1096 14.5016 15.1024 14.5276 15.0974L14.9039 17.0617C14.9379 17.0552 14.9748 17.0465 15.0138 17.0347L14.436 15.12ZM14.7293 16.0758C14.3571 15.1477 14.3571 15.1477 14.3572 15.1477C14.3572 15.1476 14.3572 15.1476 14.3572 15.1476C14.3573 15.1476 14.3573 15.1476 14.3574 15.1476C14.3575 15.1475 14.3576 15.1475 14.3577 15.1475C14.3578 15.1474 14.358 15.1473 14.3582 15.1472C14.3586 15.1471 14.359 15.1469 14.3594 15.1468C14.3602 15.1464 14.361 15.1461 14.3619 15.1458C14.3635 15.1451 14.3653 15.1444 14.3673 15.1437C14.371 15.1422 14.3756 15.1404 14.381 15.1385C14.389 15.1355 14.4094 15.128 14.4363 15.1199L15.0135 17.0348C15.0425 17.0261 15.0651 17.0179 15.0748 17.0143C15.081 17.012 15.0864 17.0099 15.0906 17.0083C15.0928 17.0074 15.0948 17.0066 15.0966 17.0059C15.0975 17.0056 15.0984 17.0052 15.0992 17.0049C15.0996 17.0047 15.1 17.0046 15.1004 17.0044C15.1006 17.0043 15.1008 17.0043 15.101 17.0042C15.1011 17.0041 15.1012 17.0041 15.1013 17.0041C15.1013 17.004 15.1014 17.004 15.1014 17.004C15.1015 17.004 15.1015 17.004 15.1015 17.004C15.1015 17.004 15.1016 17.004 14.7293 16.0758ZM14.0789 15.3239C14.0994 15.3035 14.1334 15.2731 14.182 15.2402C14.2064 15.2236 14.2346 15.2063 14.2668 15.1894C14.2828 15.1809 14.2999 15.1726 14.3178 15.1644C14.3268 15.1604 14.336 15.1564 14.3455 15.1524C14.3502 15.1505 14.355 15.1485 14.3598 15.1466C14.3623 15.1456 14.3647 15.1447 14.3671 15.1437C14.3684 15.1432 14.3696 15.1428 14.3708 15.1423C14.3714 15.1421 14.372 15.1418 14.3727 15.1416C14.373 15.1415 14.3734 15.1413 14.3736 15.1412C14.374 15.1411 14.3745 15.1409 14.7293 16.0758C15.0842 17.0108 15.0846 17.0106 15.0851 17.0104C15.0852 17.0103 15.0857 17.0102 15.086 17.01C15.0866 17.0098 15.0872 17.0096 15.0879 17.0093C15.0891 17.0089 15.0903 17.0084 15.0916 17.0079C15.094 17.0069 15.0965 17.006 15.0989 17.005C15.1038 17.0031 15.1087 17.0011 15.1136 16.999C15.1233 16.995 15.133 16.9908 15.1426 16.9865C15.1617 16.9778 15.1805 16.9686 15.1989 16.9589C15.2356 16.9396 15.2708 16.9183 15.3043 16.8956C15.3711 16.8503 15.4321 16.7987 15.4881 16.7431L14.0789 15.3239ZM14.8258 15.9793C13.8851 15.6401 13.8853 15.6396 13.8855 15.6391C13.8855 15.6389 13.8857 15.6384 13.8858 15.6381C13.8861 15.6374 13.8863 15.6367 13.8866 15.6361C13.8871 15.6347 13.8876 15.6334 13.8881 15.632C13.8891 15.6293 13.8901 15.6267 13.8911 15.624C13.8931 15.6187 13.8951 15.6135 13.8972 15.6083C13.9013 15.598 13.9056 15.5879 13.9098 15.5781C13.9184 15.5586 13.9273 15.5402 13.9362 15.523C13.954 15.4885 13.9722 15.4586 13.9894 15.4331C14.0235 15.3827 14.0546 15.3483 14.0739 15.3289L15.4931 16.7381C15.5482 16.6827 15.6004 16.6212 15.6467 16.5527C15.67 16.5182 15.6921 16.4815 15.7123 16.4425C15.7224 16.423 15.732 16.4029 15.7411 16.3822C15.7456 16.3719 15.75 16.3614 15.7543 16.3508C15.7564 16.3455 15.7585 16.3401 15.7605 16.3348C15.7615 16.3321 15.7626 16.3294 15.7636 16.3267C15.7641 16.3253 15.7646 16.324 15.765 16.3226C15.7653 16.3219 15.7655 16.3213 15.7658 16.3206C15.7659 16.3202 15.7661 16.3197 15.7662 16.3196C15.7663 16.3191 15.7665 16.3185 14.8258 15.9793ZM13.8474 15.7775C13.8523 15.752 13.8593 15.7218 13.8694 15.6882C13.8802 15.6518 13.892 15.6205 13.9024 15.5955L15.7492 16.3632C15.7767 16.297 15.7976 16.2275 15.8117 16.154L13.8474 15.7775ZM13.8333 15.9167C13.8333 15.8824 13.8365 15.8349 13.8474 15.7776L15.8117 16.1539C15.8258 16.0804 15.8333 16.0016 15.8333 15.9167H13.8333ZM13.8333 8.41667V15.9167H15.8333V8.41667H13.8333ZM13.918 8.77956C13.9006 8.74412 13.8738 8.68239 13.8549 8.60094C13.8362 8.51997 13.8333 8.45377 13.8333 8.41667H15.8333C15.8333 8.2348 15.7944 8.06264 15.712 7.89543L13.918 8.77956ZM14.1883 9.09936C14.1685 9.08488 14.1023 9.03558 14.0343 8.95551C13.973 8.88328 13.9381 8.81923 13.9231 8.78963L15.707 7.88537C15.6781 7.82837 15.6314 7.74643 15.5589 7.66096C15.4796 7.56766 15.4027 7.50977 15.371 7.48652L14.1883 9.09936ZM14.1818 9.09458L14.1883 9.09935L15.371 7.48653L15.3645 7.48176L14.1818 9.09458ZM9.39694 5.45504C9.35765 5.44195 9.31884 5.42592 9.28199 5.40712C9.24713 5.38933 9.22053 5.37237 9.20219 5.35944L10.3546 3.72483C10.245 3.64758 10.1366 3.59341 10.0294 3.55767L9.39694 5.45504ZM9.66667 5.5C9.63371 5.5 9.58939 5.49778 9.53709 5.4894C9.48122 5.48045 9.43348 5.46723 9.39693 5.45504L10.0294 3.55768C9.9154 3.51968 9.7953 3.5 9.66667 3.5V5.5ZM9.93641 5.45504C9.89985 5.46723 9.85212 5.48045 9.79624 5.4894C9.74394 5.49778 9.69962 5.5 9.66667 5.5V3.5C9.53803 3.5 9.41793 3.51968 9.30394 3.55768L9.93641 5.45504ZM10.1311 5.35944C10.1128 5.37237 10.0862 5.38932 10.0513 5.40712C10.0145 5.42592 9.97569 5.44194 9.9364 5.45504L9.30395 3.55767C9.19674 3.59341 9.0883 3.64758 8.97872 3.72483L10.1311 5.35944ZM5.14508 9.09935L5.15158 9.09458L3.96885 7.48177L3.96235 7.48654L5.14508 9.09935ZM5.41462 8.7826C5.40109 8.80973 5.36617 8.8758 5.30323 8.95073C5.23238 9.03508 5.16263 9.08647 5.14507 9.09935L3.96235 7.48653C3.93325 7.50788 3.8533 7.56733 3.77175 7.66442C3.69812 7.75209 3.652 7.83557 3.62493 7.88985L5.41462 8.7826ZM9.25484 4.14207C9.33092 4.08674 9.39974 4.05279 9.46206 4.03202L8.82961 2.13465C8.5586 2.22499 8.30797 2.35771 8.07849 2.5246L9.25484 4.14207ZM9.46206 4.03202C9.52393 4.01139 9.59057 4 9.66667 4V2C9.38165 2 9.10106 2.04416 8.82961 2.13465L9.46206 4.03202ZM9.66667 4C9.74276 4 9.8094 4.01139 9.87127 4.03202L10.5037 2.13465C10.2323 2.04416 9.95168 2 9.66667 2V4ZM9.87127 4.03202C9.9336 4.05279 10.0024 4.08674 10.0785 4.14207L11.2548 2.5246C11.0254 2.35771 10.7747 2.22499 10.5037 2.13465L9.87127 4.03202ZM10.0667 4.13333L15.0667 7.88333L16.2667 6.28333L11.2667 2.53333L10.0667 4.13333ZM15.0753 7.88974C15.1528 7.9466 15.2137 8.01709 15.2627 8.11472L17.0507 7.21861C16.8629 6.84402 16.5972 6.52562 16.258 6.27693L15.0753 7.88974ZM15.2618 8.11304C15.3104 8.21049 15.3333 8.30768 15.3333 8.41667H17.3333C17.3333 7.99787 17.2385 7.59506 17.0515 7.2203L15.2618 8.11304ZM15.3333 8.41667V15.9167H17.3333V8.41667H15.3333ZM15.3333 15.9167C15.3333 16.108 15.2769 16.247 15.1365 16.3877L16.5519 17.8007C17.0637 17.288 17.3333 16.642 17.3333 15.9167H15.3333ZM15.1377 16.3865C14.997 16.5269 14.858 16.5833 14.6667 16.5833V18.5833C15.392 18.5833 16.038 18.3137 16.5507 17.8019L15.1377 16.3865ZM4.66667 16.5833C4.4754 16.5833 4.337 16.5269 4.19711 16.3871L2.78289 17.8013C3.29523 18.3136 3.94126 18.5833 4.66667 18.5833V16.5833ZM4.19711 16.3871C4.0563 16.2463 4 16.1074 4 15.9167H2C2 16.6426 2.27037 17.2887 2.78289 17.8013L4.19711 16.3871ZM4 15.9167V8.41667H2V15.9167H4ZM4 8.41667C4 8.30847 4.02281 8.21188 4.07151 8.11472L2.28349 7.21861C2.09552 7.59368 2 7.99708 2 8.41667H4ZM4.07235 8.11304C4.12064 8.01623 4.18089 7.94631 4.25803 7.88974L3.0753 6.27693C2.73578 6.52591 2.46992 6.84488 2.28265 7.2203L4.07235 8.11304ZM4.26667 7.88333L9.26667 4.13333L8.06667 2.53333L3.06667 6.28333L4.26667 7.88333ZM5.5 10.25V16.0833H7.5V10.25H5.5ZM12.8333 9.25H6.5V11.25H12.8333V9.25ZM13.8333 16.0833V10.25H11.8333V16.0833H13.8333ZM9.1784 5.34213L14.1731 9.08817L15.3731 7.48817L10.3784 3.74213L9.1784 5.34213ZM5.16022 9.08817L10.1549 5.34213L8.95493 3.74213L3.96022 7.48817L5.16022 9.08817ZM14.6667 16.5833H11.3333V18.5833H14.6667V16.5833ZM12.3333 17.5833V11.75H10.3333V17.5833H12.3333ZM11.3333 10.75H8V12.75H11.3333V10.75ZM7 11.75V17.5833H9V11.75H7ZM8 16.5833H4.66667V18.5833H8V16.5833Z"
                        fill="#93969A" mask="url(#path-1-inside-1_510_2369)"/>
                </>
            )}
        </svg>
    );
}
export default Home;