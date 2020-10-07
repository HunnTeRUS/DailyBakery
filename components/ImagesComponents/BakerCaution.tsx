import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

interface BakerCautionInterface {
    widthImage?: number;
    heightImage?: number;
  }
  
export default ({widthImage, heightImage} : BakerCautionInterface)  => {
  return (
    <Svg width={widthImage ? widthImage : 400} height={heightImage ? heightImage : 400} viewBox="0 0 400 400" >
      <G fillRule="evenodd">
        <Path
          d="M134.38 194.824c.012 17.434 5.703 27.986 18.489 34.284 14.612 7.196 27.396 3.385 36.171-10.784l1.11-1.793-2.399.97c-4.768 1.928-15.628 1.643-18.416-.483-1.201-.916-1.223-.918-2.169-.184-3.508 2.725-16.028 2.588-20.833-.227-5.49-3.218-8.782-11.704-7.115-18.343.695-2.772 4.923-1.658 4.923 1.298 0 1.792 1.109 2.001 10.646 2.001 9.26 0 10.69.209 12.484 1.833.643.581.753.581 1.396 0 1.795-1.625 3.22-1.833 12.527-1.833 10.009 0 10.242-.059 10.899-2.735.222-.906.69-1.539 1.387-1.877l1.051-.509v-9.333h-60.156l.005 7.715m19.136 44.345v4.078l7.295 2.557 7.295 2.556 7.158-2.554 7.158-2.554v-4.048c0-2.226-.084-4.048-.188-4.048-.103 0-.85.26-1.66.578-7.346 2.883-19.002 2.69-26.57-.441-.372-.154-.488.766-.488 3.876"
          fill="#d3ebfb"
        />
        <Path
          d="M163.867 132.233c-9.735 2.003-17.344 10.937-17.377 20.404-.007 1.93-1.027 3.222-2.545 3.222-3.329 0-3.33-6.595-.002-13.603.753-1.586 1.37-2.972 1.37-3.08 0-.582-12.02.196-13.787.892-13.899 5.477-11.219 25.426 3.698 27.515 4.936.691 5.61 5.073.78 5.073h-1.629v9.375h67.188v-9.375h-1.698c-4.665 0-3.893-4.54.868-5.101 14.253-1.681 17.644-20.697 4.818-27.016-2.573-1.267-15.397-2.32-14.852-1.219 4.674 9.447 5.283 16.539 1.421 16.539-1.586 0-2.323-1.212-2.681-4.406-1.457-12.989-13.148-21.777-25.572-19.22m30.664 59.501c0 4.564.013 4.631.985 5.073 3.958 1.804 1.129 15.229-3.904 18.528-.713.468-1.831 1.735-2.484 2.816-3.026 5.01-8.244 9.904-13.785 12.928-2.508 1.369-2.4 1.408 1.415.504 9.427-2.234 18.847-10.609 22.477-19.983 1.884-4.865 2.328-8.037 2.328-16.662v-7.829h-7.032v4.625m-49.832 15.526c1.135 4.55 5.751 6.617 14.181 6.35 5.205-.164 6.547-.938 6.468-3.725-.086-3.032-.795-3.244-10.846-3.244-4.804 0-9.039-.117-9.411-.26-.581-.223-.636-.098-.392.879m36.809-.633c-9.199.206-9.322.22-10.059 1.131-1.041 1.287-.956 3.282.197 4.623l.943 1.096h5.796c6.7 0 8.468-.466 10.778-2.836 1.58-1.622 2.993-4.45 2.151-4.307-.272.046-4.684.178-9.806.293m-52.649 41.931c-8.58 2.925-11.281 8.143-11.281 21.796v8.552h30.86v-11.285c0-13.435-.5-12.227 5.998-14.497 2.547-.89 4.9-1.721 5.229-1.847.352-.135-1.305-.929-4.016-1.925l-4.615-1.696-9.794.01c-9.127.01-9.971.07-12.381.892m40.282 4.683l-15.43 5.548-.104 10.059-.105 10.058h64.908l-.123-9.495-.123-9.494-1.455-2.943c-1.78-3.599-4.38-6.15-8.028-7.878l-2.626-1.244-10.742-.08-10.743-.079-15.429 5.548M162.5 262.5c1.632 1.632.506 4.297-1.816 4.297-.869 0-2.481-1.65-2.481-2.539 0-1.998 2.879-3.176 4.297-1.758m14.366-.173c1.888 1.322.67 4.47-1.729 4.47-.901 0-2.481-1.662-2.481-2.61 0-1.75 2.678-2.934 4.21-1.86m-14.299 9.804c1.441 1.304.677 3.772-1.317 4.252-1.507.363-3.231-1.361-2.868-2.868.473-1.962 2.724-2.706 4.185-1.384m14.453 0c1.348 1.22.719 3.759-1.041 4.201-1.789.449-3.641-1.275-3.123-2.907.6-1.893 2.761-2.564 4.164-1.294"
          fill="#efc880"
        />
        <Path
          d="M162.444 127.33c-3.736.788-8.61 3.099-11.187 5.305l-1.577 1.349h-7.765c-10.955 0-14.474 1.103-19.189 6.013-8.776 9.139-6.636 24.108 4.331 30.298l2.189 1.235.144 17.067c.159 18.871.195 19.175 3.018 25.957 2.546 6.116 8.302 13.115 13.571 16.504l2.425 1.559.017 4.951.017 4.95-9.668.152c-12.127.191-14.834 1.048-20.112 6.369-5.085 5.125-6.158 8.87-6.158 21.49 0 10.33.088 10.721 2.398 10.721s2.354-.185 2.329-9.83c-.031-11.771.74-14.668 5.047-18.973 4.467-4.467 7.589-5.264 19.976-5.104l9.117.118 4.773 1.749c2.624.963 4.558 1.865 4.296 2.005-.261.141-2.672 1.006-5.358 1.924-6.875 2.348-6.215.772-6.268 14.959-.05 13.266-.078 13.109 2.399 13.14 2.222.027 2.307-.414 2.307-11.989 0-9.705.056-10.594.683-10.841.376-.148 3.672-1.324 7.324-2.614 3.653-1.29 8.838-3.143 11.524-4.118a536.46 536.46 0 018.768-3.091l3.885-1.319h8.693c11.798 0 15.105.867 19.297 5.059s5.1 7.624 5.044 19.077c-.045 9.2.11 9.848 2.36 9.848 2.533 0 3.568-8.017 2.402-18.607-.21-1.905-.353-3.492-.318-3.527.036-.035 6.832 3.46 15.103 7.766 21.315 11.096 23.928 11.586 29.29 5.494 3.198-3.633 3.227 1.769-.36-65.837-3.717-70.035-3.113-64.134-6.912-67.47-6.064-5.325-8.129-4.761-27.584 7.522l-13.965 8.817v-2.231c0-6.789-4.064-13.593-9.997-16.739-3.966-2.103-6.06-2.454-14.652-2.454h-7.688l-1.867-1.542c-5.822-4.812-14.267-6.765-22.102-5.112m11.392 5.12c8.252 2.285 14.473 9.346 15.644 17.757.658 4.73.705 4.872 1.743 5.266 4.168 1.585 4.161-7.295-.011-14.759-.538-.963-.978-1.816-.978-1.896 0-.291 7.302-.132 10.423.227 17.373 1.998 17.638 25.709.321 28.716-1.657.288-3.15.672-3.318.854-1.553 1.676.035 4.041 2.713 4.041h1.58v9.766h-67.578v-10.048l.98.187c1.397.267 3.287-.624 3.55-1.676.297-1.182-.437-2.478-1.514-2.674-.477-.087-1.902-.348-3.165-.581-13.82-2.544-16.387-21.127-3.772-27.305 2.044-1.001 2.523-1.066 8.703-1.194l6.539-.134-1.351 2.865c-2.758 5.847-3.477 12.199-1.527 13.477 1.697 1.112 2.998.104 3.379-2.618 1.054-7.525 2.278-10.251 6.5-14.484 5.886-5.901 13.35-7.944 21.139-5.787m81.515 12.183c.472.428.956 1.239 1.075 1.803.396 1.871 6.486 118.896 6.232 119.734-.49 1.611-1.362 2.189-3.301 2.189-1.61 0-56.67-27.783-69.417-35.027l-1.661-.945 3.11-2.343c6.773-5.104 11.452-11.983 13.993-20.572 1.002-3.387 1.013-3.571 1.232-20.593l.222-17.175 21.875-13.812c25.841-16.316 24.179-15.489 26.64-13.259m-21.665 26.438c-4.115 1.023-4.198 1.15-12.095 18.624-7.433 16.448-7.692 17.429-5.477 20.775 2.661 4.022 8.863 4.24 11.711.412 2.299-3.09 16.499-27.625 16.834-29.087 1.452-6.324-4.657-12.294-10.973-10.724m-31.733 22.846c0 14.239-2.526 21.468-10.172 29.114-17.764 17.764-47.937 10.654-55.832-13.155-1.386-4.18-1.931-9.198-1.953-17.981l-.012-4.786h67.969v6.808m-62.282 3.826c-.423.604-.608 1.787-.608 3.887 0 7.69 2.705 12.542 8.534 15.303l2.598 1.231h7.255c7.206 0 7.265-.007 8.83-1.042l1.576-1.043 2.26 1.14c6.379 3.218 19.286.96 23.431-4.099 4.133-5.043 4.811-16.245.984-16.245-1.2 0-2.343 1.069-2.343 2.19 0 2.396-.413 2.498-10.13 2.498-9.294 0-11.289.283-13.022 1.852-.689.623-.84.596-2.753-.499l-2.025-1.158-9.562-.124c-10.293-.133-10.389-.153-10.787-2.278-.469-2.498-2.956-3.444-4.238-1.613m24.285 9.2c2.033 1.162 2.269 3.845.494 5.621l-1.176 1.175-6.376-.131c-7.978-.164-11.468-1.991-12.561-6.577l-.233-.976 9.491.195c6.649.137 9.751.344 10.361.693m27.293 1.187c-2.306 4.459-4.76 5.533-12.653 5.538-6.575.004-7.468-.315-8.117-2.9-.92-3.669.688-4.288 11.748-4.518 10.153-.212 10.108-.221 9.022 1.88m18.321 6.849c-11.803 3.886-9.802 20.959 2.457 20.959 14.138 0 14.895-19.73.816-21.284-.94-.104-2.413.042-3.273.325m-26.757 24.059c0 4.659.629 4.084-7.702 7.028-8.01 2.83-6.274 2.846-14.564-.129l-6.836-2.453-.111-4.164c-.062-2.316.047-4.164.244-4.164.195 0 1.124.276 2.064.614 6.721 2.413 18.798 2.254 24.965-.329 1.89-.791 1.94-.7 1.94 3.597m8.17 3.393c.09.081-.657.147-1.66.147-1.688 0-1.823-.073-1.823-.984v-.985l1.66.837c.913.461 1.734.904 1.823.985m-31.775 20.292c-1.352 1.352-.362 3.781 1.541 3.781 1.104 0 2.532-1.242 2.532-2.203 0-1.819-2.762-2.889-4.073-1.578m14.453 0c-1.352 1.352-.362 3.781 1.541 3.781 1.104 0 2.532-1.242 2.532-2.203 0-1.819-2.762-2.889-4.073-1.578m-14.199 9.369c-1.773 1.242-.673 4.08 1.582 4.08 2.039 0 2.797-2.211 1.278-3.729-1.117-1.117-1.669-1.185-2.86-.351m14.4.14c-1.572 1.571-.589 3.94 1.635 3.94 1.065 0 2.237-1.234 2.237-2.356 0-1.846-2.562-2.894-3.872-1.584"
          fill="#0a0707"
        />
        <Path
          d="M151.074 182.324c9.292.058 24.497.058 33.789 0 9.292-.058 1.69-.106-16.894-.106s-26.187.048-16.895.106m50.614 7.129c0 1.397.07 1.968.157 1.27.087-.699.087-1.841 0-2.539-.087-.699-.157-.127-.157 1.269M197 201.563c0 1.396.071 1.967.158 1.269.086-.698.086-1.841 0-2.539-.087-.698-.158-.127-.158 1.27m-41.824 17.086c1.45.075 3.823.075 5.273 0 1.45-.075.264-.137-2.636-.137-2.901 0-4.087.062-2.637.137m20.719 0c1.459.076 3.744.075 5.078-.001s.14-.138-2.653-.137c-2.793.001-3.884.063-2.425.138m15.682 4.496l-1.147 1.269 1.269-1.147c1.184-1.07 1.449-1.392 1.148-1.392-.068 0-.639.571-1.27 1.27m-52.591 24.412c2.213.07 5.729.07 7.812 0 2.083-.071.272-.128-4.025-.127-4.296 0-6.001.057-3.787.127m50.369 0c2.203.07 5.806.07 8.008 0 2.202-.07.401-.127-4.004-.127-4.404 0-6.206.057-4.004.127m-40.747 20.607c0 5.801.055 8.228.121 5.395.067-2.834.067-7.58.001-10.547-.067-2.967-.121-.649-.122 5.152m69.914 3.516c.001 4.082.058 5.699.129 3.593.07-2.106.07-5.446-.001-7.422-.071-1.976-.128-.253-.128 3.829"
          fill="#a18f65"
        />
        <Path
          d="M183.203 138.086c.729.752 1.413 1.367 1.521 1.367.107 0-.401-.615-1.13-1.367-.729-.752-1.413-1.367-1.521-1.367-.107 0 .401.615 1.13 1.367m7.03.879c0 .161 1.362.245 3.028.187 5.351-.187 5.878-.347 1.368-.414-2.417-.037-4.395.066-4.396.227m-48.715 13.574c.003 1.074.079 1.467.169.874.089-.594.087-1.473-.006-1.954-.092-.48-.166.006-.163 1.08m60.196 25c.001 2.793.063 3.884.139 2.425.075-1.459.074-3.744-.002-5.078s-.137-.14-.137 2.653m-67.573 15.234c0 3.223.061 4.489.134 2.815.073-1.675.073-4.312-.001-5.86s-.134-.177-.133 3.045m67.575 4.102c0 2.9.061 4.087.136 2.637a61.84 61.84 0 000-5.274c-.075-1.45-.136-.263-.136 2.637m-51.814 9.667c2.417.068 6.372.068 8.789 0 2.417-.069.44-.125-4.394-.125-4.834 0-6.812.056-4.395.125m27.344 0c2.417.068 6.372.068 8.789 0 2.417-.069.44-.125-4.394-.125-4.834 0-6.812.056-4.395.125m5.174 32.441l.192 4.181.115-3.872c.064-2.129-.023-4.011-.193-4.181-.169-.17-.221 1.572-.114 3.872m-15.721-1.2c.698.086 1.841.086 2.539 0 .699-.087.127-.158-1.269-.158-1.397 0-1.968.071-1.27.158m-33.984 9.758a5.574 5.574 0 001.758 0c.483-.093.088-.169-.879-.169s-1.363.076-.879.169m69.145.001c.486.093 1.189.09 1.563-.008.373-.098-.025-.174-.884-.17-.859.004-1.165.084-.679.178m10.64 3.752c0 .067.571.639 1.27 1.27l1.269 1.147-1.147-1.27c-1.07-1.183-1.392-1.449-1.392-1.147m-95.15 20.386c.001 4.082.059 5.699.129 3.593s.07-5.446-.001-7.422c-.07-1.976-.128-.253-.128 3.829"
          fill="#786442"
        />
      </G>
    </Svg>
  )
}