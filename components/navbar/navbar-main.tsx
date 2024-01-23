import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaceIcon,StackIcon, StarIcon,BookmarkFilledIcon, PersonIcon, BookmarkIcon, GearIcon} from "@radix-ui/react-icons";
import { NavMenu } from "./navbar-navigation";
import { Input } from "@/components/ui/input"
import Link from "next/link";

export default function DropdownMenuDemo() {
  return (
    <div className="w-full flex items-center justify-around h-16 border-b  absolute backdrop-blur-lg bg-white/60 z-10">
      <div className="flex items-center justify-center space-x-6">
      <svg width="170" height="90" viewBox="0 0 427 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M127.44 64.2042C124.276 64.2042 121.519 63.7523 119.169 62.8484C116.864 61.9445 114.944 60.6791 113.407 59.0521C111.87 57.3799 110.695 55.4366 109.882 53.2221C109.114 50.9624 108.729 48.4993 108.729 45.8329C108.729 43.0761 109.114 40.5452 109.882 38.2403C110.695 35.8902 111.87 33.8339 113.407 32.0714C114.944 30.3088 116.842 28.953 119.101 28.0039C121.406 27.0097 124.095 26.5125 127.169 26.5125C129.609 26.5125 131.756 26.8289 133.609 27.4616C135.462 28.0943 137.043 28.9982 138.354 30.1732C139.665 31.3031 140.682 32.6363 141.405 34.1729C142.128 35.7095 142.557 37.3816 142.693 39.1894L132.795 41.6299C132.75 40.0933 132.456 38.8278 131.914 37.8336C131.372 36.8393 130.648 36.1162 129.745 35.6643C128.841 35.2123 127.824 34.9864 126.694 34.9864C125.7 34.9864 124.773 35.1671 123.915 35.5287C123.101 35.8902 122.378 36.4778 121.745 37.2912C121.158 38.1047 120.683 39.1668 120.322 40.4774C119.96 41.788 119.779 43.3924 119.779 45.2906C119.779 47.8214 120.096 49.9003 120.728 51.5273C121.361 53.1091 122.265 54.2841 123.44 55.0524C124.615 55.7755 125.994 56.1371 127.575 56.1371C129.293 56.1371 130.626 55.7755 131.575 55.0524C132.524 54.2841 133.179 53.3351 133.541 52.2052C133.948 51.0754 134.128 49.9455 134.083 48.8157L143.845 50.3749C143.8 52.1826 143.461 53.9226 142.828 55.5948C142.241 57.2217 141.269 58.6905 139.913 60.0012C138.603 61.3118 136.908 62.3512 134.829 63.1195C132.795 63.8426 130.332 64.2042 127.44 64.2042Z" fill="#090805"/>
<path d="M153.781 64.2042C151.793 64.2042 150.008 63.8426 148.426 63.1195C146.889 62.3964 145.646 61.3118 144.697 59.8656C143.793 58.3742 143.341 56.5212 143.341 54.3067C143.341 51.9115 143.861 49.9907 144.901 48.5445C145.985 47.0983 147.364 45.9911 149.036 45.2228C150.753 44.4093 152.538 43.8218 154.391 43.4602C156.289 43.0987 158.075 42.7823 159.747 42.5111C161.464 42.24 162.797 41.9914 163.746 41.7654C164.741 41.5395 165.441 41.2005 165.848 40.7486C166.3 40.2966 166.526 39.7091 166.526 38.986C166.526 38.1725 166.322 37.472 165.916 36.8845C165.554 36.2518 164.989 35.7773 164.221 35.4609C163.453 35.0993 162.504 34.9186 161.374 34.9186C160.199 34.9186 159.091 35.122 158.052 35.5287C157.058 35.9354 156.199 36.5907 155.476 37.4946C154.798 38.3533 154.346 39.4832 154.12 40.8842L144.494 38.7826C144.855 36.5682 145.556 34.6926 146.595 33.156C147.635 31.5742 148.923 30.2862 150.459 29.2919C151.996 28.2977 153.691 27.5972 155.544 27.1904C157.442 26.7385 159.453 26.5125 161.577 26.5125C164.289 26.5125 166.616 26.8515 168.56 27.5294C170.548 28.2073 172.175 29.2467 173.441 30.6478C174.751 32.0036 175.7 33.7209 176.288 35.7999C176.92 37.8788 177.237 40.3192 177.237 43.1213V48.8835C177.237 50.4653 177.259 52.0696 177.305 53.6966C177.35 55.2784 177.395 56.8602 177.44 58.442C177.531 60.0238 177.644 61.6281 177.779 63.2551H168.221C168.085 61.9897 167.949 60.6113 167.814 59.1199C167.723 57.5833 167.656 55.9789 167.611 54.3067H166.594C166.142 56.1597 165.306 57.8319 164.085 59.3233C162.91 60.8147 161.442 62.0123 159.679 62.9162C157.962 63.7748 155.996 64.2042 153.781 64.2042ZM158.527 56.4082C159.295 56.4082 160.108 56.2727 160.967 56.0015C161.826 55.6851 162.639 55.2332 163.407 54.6457C164.176 54.0582 164.854 53.3125 165.441 52.4086C166.029 51.5047 166.435 50.4427 166.661 49.2224L166.594 45.155L168.153 45.2906C167.475 45.8781 166.661 46.33 165.712 46.6464C164.763 46.9627 163.746 47.2339 162.662 47.4599C161.622 47.6406 160.583 47.844 159.543 48.07C158.504 48.2508 157.555 48.4993 156.696 48.8157C155.883 49.132 155.227 49.5614 154.73 50.1037C154.278 50.646 154.052 51.4143 154.052 52.4086C154.052 53.6288 154.459 54.6005 155.273 55.3236C156.131 56.0467 157.216 56.4082 158.527 56.4082Z" fill="#090805"/>
<path d="M180.638 63.2551V27.4616H189.451L189.519 39.3928H190.671C191.168 36.41 191.914 33.9695 192.908 32.0714C193.902 30.1732 195.145 28.7722 196.637 27.8683C198.173 26.9645 199.981 26.5125 202.06 26.5125C203.551 26.5125 204.884 26.7611 206.06 27.2582C207.235 27.7554 208.229 28.5236 209.042 29.5631C209.856 30.5574 210.511 31.8906 211.008 33.5628C211.505 35.1897 211.822 37.1331 211.957 39.3928H212.839C213.426 36.3648 214.285 33.9017 215.415 32.0036C216.545 30.1054 217.923 28.727 219.55 27.8683C221.177 26.9645 222.985 26.5125 224.973 26.5125C227.007 26.5125 228.702 26.8967 230.057 27.665C231.458 28.4333 232.588 29.4501 233.447 30.7155C234.306 31.981 234.961 33.4272 235.413 35.0542C235.91 36.6359 236.249 38.2629 236.43 39.9351C236.611 41.6073 236.701 43.189 236.701 44.6804V63.2551H225.719V45.7651C225.719 44.9968 225.674 44.0703 225.583 42.9857C225.538 41.901 225.357 40.8164 225.041 39.7317C224.725 38.6471 224.227 37.7432 223.55 37.0201C222.872 36.297 221.923 35.9354 220.702 35.9354C219.392 35.9354 218.217 36.4326 217.177 37.4268C216.183 38.4211 215.392 39.8221 214.805 41.6299C214.262 43.4376 213.991 45.6295 213.991 48.2056V63.2551H203.28V45.8329C203.28 45.1098 203.235 44.2059 203.145 43.1213C203.099 41.9914 202.919 40.8842 202.602 39.7995C202.331 38.7149 201.834 37.811 201.111 37.0879C200.433 36.3196 199.439 35.9354 198.128 35.9354C196.863 35.9354 195.733 36.41 194.738 37.359C193.744 38.2629 192.953 39.6413 192.366 41.4943C191.823 43.302 191.552 45.5391 191.552 48.2056V63.2551H180.638Z" fill="#090805"/>
<path d="M262.243 64.2042C260.074 64.2042 258.153 63.7748 256.481 62.9162C254.854 62.0123 253.521 60.7017 252.481 58.9843C251.442 57.2217 250.719 55.0524 250.312 52.4764H249.295L249.16 63.2551H240.008V14.9203H250.922V26.3091C250.922 27.439 250.854 28.6366 250.719 29.9021C250.583 31.1675 250.402 32.5007 250.176 33.9017C249.951 35.2575 249.679 36.6811 249.363 38.1725H250.651C251.193 35.5513 251.984 33.4046 253.024 31.7324C254.063 30.015 255.374 28.727 256.956 27.8683C258.537 27.0097 260.39 26.5803 262.514 26.5803C265.362 26.5803 267.825 27.326 269.904 28.8174C272.028 30.2636 273.677 32.3877 274.852 35.1897C276.027 37.9466 276.615 41.3361 276.615 45.3584C276.615 49.3806 276.005 52.7927 274.785 55.5948C273.609 58.3968 271.937 60.5435 269.768 62.0349C267.644 63.4811 265.136 64.2042 262.243 64.2042ZM258.244 55.3914C259.69 55.3914 260.933 54.9846 261.972 54.1712C263.057 53.3125 263.87 52.1374 264.413 50.646C265 49.1094 265.294 47.3921 265.294 45.4939C265.294 43.5054 265.023 41.7654 264.48 40.274C263.938 38.7826 263.147 37.6076 262.108 36.7489C261.113 35.8902 259.871 35.4609 258.379 35.4609C257.52 35.4609 256.707 35.6191 255.939 35.9354C255.17 36.2518 254.47 36.7037 253.837 37.2912C253.25 37.8336 252.73 38.4889 252.278 39.2572C251.826 40.0255 251.487 40.8842 251.261 41.8332C251.035 42.7823 250.922 43.7766 250.922 44.816V45.9007C250.922 47.1209 251.08 48.2959 251.397 49.4258C251.713 50.5556 252.165 51.5725 252.753 52.4764C253.385 53.3803 254.154 54.1034 255.057 54.6457C255.961 55.1428 257.023 55.3914 258.244 55.3914Z" fill="#090805"/>
<path d="M278.855 63.2551V27.4616H287.939L288.075 40.3418H289.159C289.476 36.9523 290.063 34.2633 290.922 32.2747C291.781 30.2862 292.933 28.8626 294.379 28.0039C295.871 27.1 297.678 26.6481 299.802 26.6481C300.345 26.6481 300.91 26.6933 301.497 26.7837C302.085 26.8741 302.717 27.0548 303.395 27.326L302.989 39.1216C302.13 38.7149 301.271 38.4211 300.413 38.2403C299.554 38.0596 298.763 37.9692 298.04 37.9692C296.368 37.9692 294.944 38.3307 293.769 39.0538C292.594 39.7769 291.668 40.8616 290.99 42.3078C290.357 43.754 289.973 45.5617 289.837 47.731V63.2551H278.855Z" fill="#090805"/>
<path d="M304.594 63.2551V27.4616H315.509V63.2551H304.594ZM310.086 23.3264C308.007 23.3264 306.402 22.897 305.272 22.0383C304.188 21.1345 303.645 19.8464 303.645 18.1743C303.645 16.4569 304.188 15.1689 305.272 14.3102C306.402 13.4063 308.007 12.9544 310.086 12.9544C312.21 12.9544 313.814 13.4063 314.899 14.3102C316.028 15.2141 316.593 16.5021 316.593 18.1743C316.593 19.8012 316.028 21.0667 314.899 21.9705C313.814 22.8744 312.21 23.3264 310.086 23.3264Z" fill="#090805"/>
<path d="M332.226 64.2042C329.379 64.2042 326.848 63.4811 324.634 62.0349C322.464 60.5435 320.769 58.3742 319.549 55.527C318.329 52.6798 317.719 49.2224 317.719 45.155C317.719 41.3587 318.261 38.0821 319.346 35.3253C320.431 32.5233 322.012 30.3766 324.091 28.8852C326.17 27.3486 328.724 26.5803 331.752 26.5803C333.921 26.5803 335.796 27.0097 337.378 27.8683C338.96 28.6818 340.271 29.9473 341.31 31.6646C342.349 33.382 343.14 35.5513 343.683 38.1725H344.971C344.7 36.6811 344.428 35.2349 344.157 33.8339C343.931 32.3877 343.728 31.0319 343.547 29.7665C343.412 28.501 343.344 27.3486 343.344 26.3091V14.9203H354.326V63.2551H345.174L345.106 52.4764H343.954C343.457 55.188 342.688 57.4025 341.649 59.1199C340.61 60.8372 339.299 62.1253 337.717 62.984C336.135 63.7974 334.305 64.2042 332.226 64.2042ZM336.09 55.3914C337.31 55.3914 338.372 55.1428 339.276 54.6457C340.18 54.1034 340.926 53.3803 341.513 52.4764C342.146 51.5725 342.621 50.5556 342.937 49.4258C343.253 48.2959 343.412 47.1209 343.412 45.9007V44.816C343.412 43.7766 343.276 42.8049 343.005 41.901C342.779 40.952 342.44 40.0933 341.988 39.325C341.581 38.5115 341.061 37.8336 340.429 37.2912C339.841 36.7037 339.163 36.2518 338.395 35.9354C337.627 35.6191 336.813 35.4609 335.955 35.4609C334.463 35.4609 333.198 35.8902 332.158 36.7489C331.164 37.6076 330.396 38.7826 329.853 40.274C329.311 41.7654 329.04 43.4828 329.04 45.4261C329.04 47.3695 329.334 49.1094 329.921 50.646C330.509 52.1374 331.322 53.3125 332.362 54.1712C333.446 54.9846 334.689 55.3914 336.09 55.3914Z" fill="#090805"/>
<path d="M372.497 75.1863C368.475 75.1863 365.221 74.8699 362.735 74.2372C360.295 73.6045 358.509 72.7006 357.38 71.5256C356.25 70.3957 355.685 68.9947 355.685 67.3226C355.685 65.2888 356.498 63.6393 358.125 62.3738C359.752 61.1084 362.125 60.3401 365.243 60.069V59.0521C362.848 59.0521 360.973 58.7583 359.617 58.1708C358.306 57.5381 357.651 56.5212 357.651 55.1202C357.651 53.8548 358.284 52.7024 359.549 51.6629C360.814 50.6234 362.916 49.9229 365.853 49.5614V48.4767C363.187 48.1152 361.063 47.1209 359.481 45.4939C357.945 43.867 357.176 41.7428 357.176 39.1216C357.176 36.8619 357.786 34.8282 359.007 33.0204C360.272 31.2127 362.125 29.7891 364.565 28.7496C367.051 27.7102 370.102 27.1904 373.717 27.1904H392.021V35.4609L380.361 33.9017V35.1219C383.569 35.5739 385.829 36.3196 387.14 37.359C388.45 38.3985 389.106 39.7769 389.106 41.4943C389.106 43.2568 388.518 44.816 387.343 46.1718C386.168 47.5277 384.473 48.6123 382.259 49.4258C380.044 50.1941 377.355 50.5782 374.192 50.5782C373.514 50.5782 372.768 50.5556 371.955 50.5105C371.186 50.4201 370.102 50.2845 368.701 50.1037C367.978 50.6008 367.39 51.0528 366.938 51.4595C366.531 51.8663 366.328 52.2504 366.328 52.612C366.328 52.8379 366.441 53.0413 366.667 53.2221C366.893 53.3577 367.187 53.4706 367.548 53.561C367.955 53.6514 368.407 53.6966 368.904 53.6966H379.818C380.722 53.6966 381.897 53.7644 383.343 53.9C384.79 53.9904 386.236 54.3293 387.682 54.9169C389.128 55.4592 390.349 56.3857 391.343 57.6963C392.337 59.0069 392.834 60.8824 392.834 63.3229C392.834 65.9893 392.089 68.2038 390.597 69.9664C389.151 71.729 386.914 73.0396 383.886 73.8983C380.903 74.757 377.107 75.1863 372.497 75.1863ZM373.378 66.1701C376.135 66.1701 378.237 66.0345 379.683 65.7634C381.129 65.5374 382.101 65.1533 382.598 64.6109C383.14 64.1138 383.411 63.5037 383.411 62.7806C383.411 62.0123 383.253 61.4248 382.937 61.018C382.62 60.5661 382.191 60.2723 381.649 60.1367C381.152 59.956 380.632 59.843 380.09 59.7978C379.592 59.7526 379.163 59.73 378.802 59.73H369.921C368.339 59.9108 367.187 60.3401 366.464 61.018C365.786 61.6507 365.447 62.419 365.447 63.3229C365.447 64.0912 365.718 64.6787 366.26 65.0855C366.848 65.4922 367.729 65.7634 368.904 65.899C370.079 66.0797 371.57 66.1701 373.378 66.1701ZM373.514 44.9516C375.276 44.9516 376.61 44.4545 377.513 43.4602C378.417 42.4659 378.869 41.1779 378.869 39.5961C378.869 37.924 378.395 36.5682 377.446 35.5287C376.542 34.444 375.231 33.9017 373.514 33.9017C371.796 33.9017 370.441 34.444 369.446 35.5287C368.497 36.5682 368.023 37.924 368.023 39.5961C368.023 40.6356 368.226 41.5621 368.633 42.3756C369.085 43.189 369.718 43.8218 370.531 44.2737C371.345 44.7256 372.339 44.9516 373.514 44.9516Z" fill="#090805"/>
<path d="M410.413 64.2042C407.295 64.2042 404.561 63.7748 402.21 62.9162C399.906 62.0575 397.962 60.8372 396.38 59.2555C394.844 57.6285 393.669 55.7077 392.855 53.4932C392.087 51.2787 391.703 48.7931 391.703 46.0363C391.703 43.3246 392.087 40.7712 392.855 38.3759C393.624 35.9806 394.754 33.9017 396.245 32.1392C397.782 30.3766 399.68 28.9982 401.939 28.0039C404.199 27.0097 406.775 26.5125 409.667 26.5125C412.605 26.5125 415.159 27.0097 417.328 28.0039C419.542 28.953 421.35 30.354 422.751 32.2069C424.152 34.0599 425.124 36.2744 425.666 38.8504C426.254 41.3813 426.389 44.2285 426.073 47.3921L398.753 47.6632V41.901L419.09 41.6299L416.108 44.5449C416.379 42.3756 416.266 40.5904 415.769 39.1894C415.271 37.7432 414.503 36.6811 413.464 36.0032C412.424 35.2801 411.204 34.9186 409.803 34.9186C408.176 34.9186 406.798 35.3479 405.668 36.2066C404.538 37.0653 403.679 38.3081 403.092 39.9351C402.504 41.5169 402.21 43.4602 402.21 45.7651C402.21 49.4258 402.934 52.0922 404.38 53.7644C405.871 55.4366 407.882 56.2727 410.413 56.2727C411.588 56.2727 412.56 56.1145 413.328 55.7981C414.096 55.4818 414.729 55.075 415.226 54.5779C415.723 54.0356 416.085 53.4255 416.311 52.7476C416.582 52.0696 416.763 51.3691 416.853 50.646L426.547 52.2052C426.367 53.8322 425.937 55.3688 425.259 56.815C424.627 58.216 423.655 59.4814 422.344 60.6113C421.079 61.6959 419.475 62.5772 417.531 63.2551C415.588 63.8878 413.215 64.2042 410.413 64.2042Z" fill="#090805"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.625 0.0614072C18.8762 1.2963 0 20.9437 0 44.9998C0 69.056 18.8763 88.7034 42.6251 89.9382C36.236 77.7139 32.4 62.0616 32.4 44.9997C32.4 27.9379 36.236 12.2857 42.625 0.0614072Z" fill="#0C11E8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.6174 0.0620197C43.4066 0.0208445 44.2011 0 45.0005 0C69.4312 0 89.3148 19.4687 89.9831 43.738C89.194 43.7792 88.3994 43.8 87.6 43.8C63.1693 43.8 43.2857 24.3313 42.6174 0.0620197Z" fill="#0C11E8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.6174 89.938C43.4066 89.9791 44.2011 90 45.0004 90C69.4312 90 89.3148 70.5313 89.983 46.262C89.1939 46.2208 88.3994 46.2 87.6 46.2C63.1693 46.2 43.2857 65.6687 42.6174 89.938Z" fill="#0C11E8"/>
</svg>


        <NavMenu />
      </div>
      <div className="  w-5/12 flex items-center justify-center space-x-2">
      <Link href="/docs" legacyBehavior passHref>
              <Button size={"sm"}>Write a new history</Button>
          </Link>
      <Input type="text" placeholder="Search some history"  className="w-1/2 bg-white" />

      <DropdownMenu >
        <DropdownMenuTrigger asChild className="bg-white">
          <div className="flex items-center justify-between w-fit space-x-2 border rounded-md  p-2 py-1 cursor-pointer ">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-xs font-semibold">Antônio de Pádua</h2>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut><PersonIcon/></DropdownMenuShortcut>
            </DropdownMenuItem>
            
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut><GearIcon /></DropdownMenuShortcut>
            </DropdownMenuItem>
         
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>My Histories
            <DropdownMenuShortcut><BookmarkIcon/></DropdownMenuShortcut>

            </DropdownMenuItem>
            
            <DropdownMenuItem>
              Favorities Histories
              <DropdownMenuShortcut><StarIcon /></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
   
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
      
    </div>
  );
}
