import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

interface BakerInterface {
  widthImage?: number;
  heightImage?: number;
}

export default ({widthImage, heightImage} : BakerInterface)  => {
return (
    <Svg width={widthImage ? widthImage : 400} height={heightImage ? heightImage : 400} viewBox="0 0 400 400" >
      <G fillRule="evenodd">
        <Path
          d="M223.828 113.148c-14.977 1.444-27.562 5.879-39.279 13.842l-3.927 2.669-2.385-.964c-8.868-3.582-20.122-1.955-26.932 3.894l-1.625 1.395h-7.765c-10.78 0-13.912.927-18.715 5.539-9.282 8.913-7.334 24.456 3.857 30.772l2.189 1.235.144 17.067c.159 18.871.195 19.175 3.018 25.957 2.546 6.116 8.302 13.115 13.571 16.504l2.425 1.559.017 4.951.017 4.95-9.668.152c-12.127.191-14.834 1.048-20.112 6.369-5.085 5.125-6.158 8.87-6.158 21.49 0 10.33.088 10.721 2.398 10.721 2.44 0 2.466-.11 2.68-11.393l.195-10.287 1.27-2.594c3.732-7.628 9.139-9.842 23.535-9.635l8.399.12 4.787 1.741c3.08 1.12 4.596 1.848 4.25 2.042-.295.165-2.625 1.031-5.178 1.924-6.594 2.307-5.973.768-6.026 14.93-.05 13.266-.078 13.109 2.399 13.14 2.222.027 2.307-.415 2.307-11.978v-10.561l15.722-5.619 15.723-5.619 8.772-.119c12.294-.167 15.556.686 20.117 5.262 4.02 4.033 4.937 7.603 4.882 19.013-.044 8.963.121 9.633 2.362 9.633 1.81 0 2.519-1.251 2.677-4.727l.14-3.085 5.525-.004c57.131-.033 95.785-57.127 74.636-110.243-12.705-31.911-46.933-53.256-80.244-50.043m14.26 5.799c50.641 5.86 80.627 59.246 59.418 105.786-12.038 26.416-40.335 44.093-69.12 43.18-5.344-.17-4.804.268-5.041-4.084l-.193-3.555 6.686.008c41.576.046 73.337-37.854 65.938-78.685-7.921-43.712-54.337-67.838-94.563-49.152l-3.361 1.561-6.023-.108c-7.405-.134-7.534-.299-2.7-3.449 14.245-9.283 32.03-13.461 48.959-11.502m2.146 13.299c40.318 6.955 62.886 50.656 45.272 87.665-10.21 21.451-32.348 35.334-56.014 35.127-7.789-.068-8.03-.142-10.04-3.085-.954-1.396-2.631-3.242-3.728-4.101-2.265-1.775-2.454-2.149-1.09-2.149 8.027 0 13.515-10.525 9.534-18.287l-1.419-2.765 1.211-.266c2.505-.55 2.35-.332 30.604-43.077 12.389-18.743 12.328-18.622 10.768-21.408-.769-1.374-23.086-22.691-24.62-23.518-1.622-.873-4.624-.384-5.983.975-1.016 1.015-12.871 37.817-24.223 75.19-.98 3.226-.789 4.869.76 6.528l1.086 1.161-1.586.246c-9.245 1.43-13.631 12.113-8.254 20.102l1.341 1.994h-11.657l-2.446-2.077-2.445-2.077v-5.766l2.343-1.583c6.396-4.32 12.403-12.229 14.848-19.552 1.764-5.285 1.861-6.405 2.038-23.65l.171-16.619 1.808-.959c12.877-6.828 13.304-25.762.751-33.315l-2.26-1.36 3.627-1.192c9.37-3.08 19.9-3.856 29.603-2.182m-67.227-.005c9.057 2.135 15.71 9.989 16.665 19.674.367 3.729 2.138 5.103 4.078 3.163 1.479-1.479.554-7.854-1.87-12.89l-1.581-3.287c-.355-.735 11.801.081 14.12.949 14.257 5.334 11.599 25.305-3.712 27.885-4.953.835-5.369 4.921-.5 4.921h1.77l-.11 4.785-.109 4.786-33.692.099-33.691.1v-9.77h1.563c4.967 0 4.06-4.169-1.091-5.008-14.479-2.357-17.279-21.153-4.073-27.343 2.086-.978 2.651-1.055 8.557-1.171l6.323-.123-1.31 2.602c-2.406 4.783-3.496 11.478-2.147 13.194 1.82 2.313 4.287.569 4.287-3.031 0-12.354 13.816-22.53 26.523-19.535m87.54 30.291c0 .191-8.229 12.7-18.287 27.797-10.058 15.098-18.476 27.788-18.707 28.201-.435.778-7.757-2.006-8.181-3.111-.118-.307 17.991-59.033 22.371-72.549l.602-1.856 11.101 10.585c6.105 5.822 11.101 10.742 11.101 10.933m-58.725 33.073c-.259 9-.638 11.459-2.476 16.054-10.828 27.065-49.001 28.474-61.633 2.275-2.808-5.825-3.032-7.039-3.233-17.547l-.177-9.278h67.763l-.244 8.496m-62.113 1.984c-.853.943-.883 6.791-.051 10.044 1.171 4.579 5.227 8.817 9.71 10.149 4.749 1.41 15.793.654 17.868-1.224.601-.544.817-.497 2.33.503l1.667 1.103h7.45c10.129 0 13.632-1.665 16.727-7.951 1.573-3.193 2.15-11.426.89-12.686-1.384-1.384-4.112-.355-4.112 1.55 0 2.203-.308 2.274-10.808 2.486l-9.7.195-1.864 1.095-1.863 1.095-1.066-.758c-1.923-1.366-3.933-1.623-12.785-1.631-9.575-.009-9.313.051-10.157-2.34-.868-2.461-2.809-3.207-4.236-1.63m24.075 9.213c1.907.884 2.278 4.437.62 5.937-1.191 1.079-12.687 1.106-14.837.036-2.27-1.131-5.426-4.803-5.426-6.314 0-.341 18.879-.013 19.643.341m27.788.363c-1.426 4.717-4.982 6.507-12.93 6.507-6.91 0-8.118-.61-8.02-4.048.084-2.983 1.132-3.254 12.694-3.281l8.511-.021-.255.843m23.963 18.83c7.941 3.318 5.279 15.254-3.245 14.547-8.057-.668-9.504-11.863-1.885-14.579 1.993-.711 3.372-.702 5.13.032m-58.511 10.136c6.712 2.009 14.707 2.014 21.608.014 1.876-.544 3.502-.989 3.614-.989.111 0 .152 1.869.091 4.153l-.11 4.152-7.065 2.518-7.064 2.518-7.194-2.525-7.193-2.525-.111-4.146c-.061-2.279-.048-4.145.029-4.145s1.605.439 3.395.975m1.982 26.539c-.811.977-.342 3.056.839 3.716 2.048 1.144 4.393-1.79 2.821-3.528-.805-.889-2.986-1.001-3.66-.188m14.374.387c-.97 2.127.814 4.175 2.934 3.37.951-.362 1.42-1.134 1.42-2.336 0-1.93-3.561-2.776-4.354-1.034m-13.918 9.035c-1.791 1.255-.765 4.08 1.481 4.08 2.048 0 3.021-2.442 1.557-3.906-.939-.939-1.87-.992-3.038-.174m14.453 0c-1.773 1.242-.769 4.08 1.443 4.08 2.131 0 3.108-2.393 1.595-3.906-.938-.939-1.869-.992-3.038-.174"
          fill="#060606"
        />
        <Path
          d="M226.472 118.642c.702.087 1.757.086 2.344-.004.587-.089.012-.16-1.277-.158-1.289.003-1.769.076-1.067.162m4.687 0c.702.087 1.757.086 2.344-.004.587-.089.013-.16-1.276-.158-1.289.003-1.77.076-1.068.162m-3.509 7.428c1.135.079 2.893.078 3.906-.002 1.013-.08.085-.145-2.064-.144-2.148.001-2.977.067-1.842.146m-1.178 5.463c.702.087 1.757.085 2.344-.004.587-.089.012-.16-1.277-.158-1.289.002-1.769.075-1.067.162m4.49-.003c.594.09 1.473.088 1.954-.005.48-.093-.006-.166-1.08-.163-1.074.003-1.467.079-.874.168m-65.239.38c.376.098.991.098 1.367 0s.068-.179-.684-.179-1.059.081-.683.179m3.325.007c.485.093 1.189.09 1.562-.008s-.024-.174-.883-.17c-.86.004-1.165.084-.679.178m21.186 7.122c0 .203.203.493.451.647.275.169.346.107.181-.159-.191-.308.91-.474 3.748-.564l4.019-.126-4.199-.083c-2.422-.047-4.2.073-4.2.285m9.975 1.241c8.525 7.38 8.343 20.183-.379 26.616l-1.588 1.171 2.084-.262c17.284-2.177 17.878-27.41.675-28.676l-2.319-.171 1.527 1.322m82.408.345c.839.859 1.614 1.563 1.721 1.563.108 0-.491-.704-1.33-1.563-.839-.859-1.614-1.562-1.721-1.562-.108 0 .491.703 1.33 1.562m-36.328.781c.839.86 1.614 1.563 1.721 1.563.108 0-.491-.703-1.33-1.563-.839-.859-1.614-1.562-1.721-1.562-.108 0 .491.703 1.33 1.562m-6.836.977c.729.752 1.413 1.367 1.521 1.367.107 0-.401-.615-1.13-1.367-.729-.752-1.413-1.367-1.521-1.367-.107 0 .401.615 1.13 1.367m36.719 2.27c0 .068.571.639 1.269 1.27l1.27 1.147-1.147-1.269c-1.07-1.184-1.392-1.449-1.392-1.148m-22.266 3.98c.729.752 1.413 1.367 1.521 1.367.107 0-.401-.615-1.13-1.367-.729-.752-1.413-1.367-1.521-1.367-.107 0 .401.615 1.13 1.367m-6.836.976c.839.86 1.614 1.563 1.721 1.563.108 0-.491-.703-1.33-1.563-.839-.859-1.614-1.562-1.721-1.562-.108 0 .491.703 1.33 1.562m-105.573 1.172c0 .752.08 1.06.179.684a3.215 3.215 0 000-1.367c-.099-.376-.179-.069-.179.683m48.047 1.953c0 .752.08 1.06.178.684a3.183 3.183 0 000-1.367c-.098-.376-.178-.069-.178.683m72.175 3.321c.729.752 1.413 1.367 1.52 1.367.108 0-.401-.615-1.13-1.367-.728-.752-1.413-1.367-1.52-1.367-.107 0 .401.615 1.13 1.367m-7.031.781c.728.752 1.413 1.367 1.52 1.367.107 0-.401-.615-1.13-1.367-.729-.752-1.413-1.367-1.52-1.367-.108 0 .401.615 1.13 1.367m-58.692 12.2l-1.465.601v12.389l-30.176.104-30.175.104 33.789-.004 33.789-.003.109-4.786.11-4.785h-1.77c-2.663 0-3.974-1.586-2.928-3.541.223-.416.355-.739.293-.718-.061.021-.77.309-1.576.639m5.723 23.737c0 3.223.061 4.489.134 2.815.074-1.675.073-4.312-.001-5.86s-.134-.177-.133 3.045m89.808 1.172c.002 1.289.075 1.77.162 1.068.087-.703.085-1.757-.004-2.344-.089-.587-.16-.013-.158 1.276m-94.518 7.813c.001 1.719.07 2.373.153 1.454.082-.918.081-2.325-.003-3.125-.084-.8-.152-.048-.15 1.671m-46.5 4.783c2.105.071 5.445.071 7.421 0 1.977-.071.254-.129-3.828-.128-4.082 0-5.699.058-3.593.128m27.734 0c2.106.071 5.446.071 7.422 0s.253-.129-3.829-.128c-4.082 0-5.699.058-3.593.128m14.314 7.814l-1.346 1.465 1.465-1.346c1.363-1.253 1.644-1.583 1.346-1.583-.065 0-.725.659-1.465 1.464m-37.381 4.294c1.45.075 3.823.075 5.273 0 1.45-.075.264-.137-2.636-.137-2.901 0-4.087.062-2.637.137m20.719 0c1.459.076 3.744.075 5.078-.001s.14-.138-2.653-.137c-2.793.001-3.884.063-2.425.138m-31.754 4.593c.728.752 1.413 1.367 1.52 1.367.107 0-.401-.615-1.13-1.367-.729-.752-1.413-1.367-1.52-1.367-.108 0 .401.615 1.13 1.367m47.244.098l-1.346 1.465 1.465-1.346c1.363-1.253 1.644-1.584 1.346-1.584-.065 0-.724.659-1.465 1.465m-4.144 12.207c0 1.611.069 2.27.153 1.465.084-.806.084-2.124 0-2.93s-.153-.146-.153 1.465m-22.49 2.229c.486.094 1.189.09 1.562-.008.374-.097-.024-.174-.883-.169-.86.004-1.165.084-.679.177m110.817 4.509l-1.545 1.66 1.661-1.544c1.544-1.436 1.839-1.776 1.544-1.776-.064 0-.811.747-1.66 1.66m-144.709 5.503c-5.006 1.111-9.619 4.697-11.816 9.188l-1.27 2.594-.122 9.668-.122 9.668h31.299v-11.463c0-13.459-.641-11.936 6.008-14.27 2.553-.896 4.883-1.764 5.178-1.929.346-.194-1.17-.922-4.25-2.042l-4.787-1.741-8.985-.075c-5.904-.049-9.721.089-11.133.402m59.082-.231c2.525.068 6.656.068 9.18 0 2.525-.068.459-.123-4.59-.123-5.049 0-7.114.055-4.59.123m-36.255 21.193c0 5.693.055 8.022.122 5.176a270.64 270.64 0 000-10.352c-.067-2.846-.122-.517-.122 5.176m71.607-8.318a5.574 5.574 0 001.758 0c.483-.093.088-.169-.879-.169s-1.362.076-.879.169m8.398-.006a3.22 3.22 0 001.368 0c.376-.099.068-.179-.684-.179s-1.06.08-.684.179m-72.949 1.579c.645.093 1.524.463 1.953.821.775.645.776.644.037-.228-.506-.598-1.13-.861-1.953-.821l-1.209.059 1.172.169m14.453 0c.645.093 1.524.463 1.953.821.775.645.776.644.038-.228-.507-.598-1.131-.861-1.954-.821l-1.209.059 1.172.169m43.33 8.698c0 4.619.057 6.509.126 4.199a170.38 170.38 0 000-8.398c-.069-2.31-.126-.42-.126 4.199m7.163-2.849c.486.094 1.189.09 1.563-.007.373-.098-.024-.175-.884-.17-.859.004-1.165.084-.679.177"
          fill="#d7b872"
        />
        <Path
          d="M219.727 119.344c-10.965 1.42-24.141 6.521-32.339 12.519-2.622 1.919-2.205 2.121 4.374 2.121h5.779l4.062-1.91c40.524-19.06 88.247 7.005 94.688 51.715 5.872 40.77-26.41 77.579-67.258 76.689l-5.791-.126.123 3.557.123 3.557 3.784.227c29.512 1.767 59.466-17.438 71.155-45.623 22.064-53.2-21.55-110.129-78.7-102.726m.925 12.898c-3.973.619-7.42 1.452-10.779 2.607l-2.432.836 1.755 1.005c12.728 7.291 12.553 26.343-.309 33.601l-2.246 1.268-.006 15.881c-.004 13.976-.092 16.302-.734 19.396-2.026 9.762-7.95 18.797-15.752 24.023l-2.624 1.758-.013 2.801-.012 2.801 2.441 2.178 2.442 2.178 5.538.001 5.538.002-1.348-2.238c-4.885-8.112.179-19.994 8.534-20.024.59-.002 1.074-.179 1.074-.394 0-.215-.138-.391-.307-.391-.641 0-1.646-2.333-1.646-3.821 0-1.668 23.065-76.187 24.055-77.716 1.363-2.107 4.587-3.008 6.756-1.886 2.767 1.431 24.995 23.182 25.462 24.915.655 2.433.873 2.066-19.701 33.066-19.607 29.542-19.891 29.933-22.022 30.356-1.518.301-1.504.212-.315 2.028 4.575 6.987.311 17.157-8.069 19.247l-1.841.459 1.565 1.308c1.84 1.537 4.083 4.151 4.873 5.679.703 1.359 2.366 1.663 9.159 1.673 42.142.06 72.105-41.808 58.335-81.515-9.779-28.197-38.33-45.607-67.371-41.082m6.373 45.623c-6.264 20.073-11.481 36.737-11.592 37.031-.14.368.996 1.093 3.664 2.338l3.867 1.804 18.694-28.156c10.281-15.486 18.694-28.267 18.694-28.402 0-.135-3.956-3.99-8.789-8.566-4.834-4.577-9.77-9.272-10.969-10.434l-2.179-2.112-11.39 36.497m-17.584 48.754c-5.797 2.87-4.84 11.909 1.438 13.6 2.876.774 6.449-.595 8.113-3.11 4.162-6.289-2.735-13.863-9.551-10.49"
          fill="#fbfbfb"
        />
        <Path
          d="M165.625 132.049c-10.625 1.26-19.09 10.514-19.134 20.918-.008 1.904-.901 2.892-2.614 2.892-3.807 0-3.187-7.576 1.352-16.504.234-.461-9.023-.341-11.323.147-15.971 3.388-14.796 26.062 1.455 28.077 4.874.605 5.5 5.077.711 5.077h-1.697v9.375h60.156l.004-6.152.004-6.152 2.415-1.124c11.074-5.155 12.82-20.047 3.314-28.271-1.454-1.258-1.504-1.269-5.561-1.269h-4.093l1.204 2.385c3.474 6.882 3.674 14.411.384 14.411-1.905 0-2.398-.749-2.789-4.243-1.39-12.431-11.795-20.99-23.788-19.567m28.906 59.685c0 4.564.013 4.631.985 5.073 3.935 1.793 1.532 13.93-3.638 18.375-1.158.996-2.351 2.28-2.65 2.854-2.144 4.109-7.882 9.554-13.368 12.685-3.364 1.92-2.777 1.984 2.656.29 15.031-4.686 23.029-17.245 23.041-36.187l.006-7.715h-7.032v4.625m-50 15.155c.001 1.187 2.671 4.252 4.684 5.376 2.854 1.594 12.732 1.866 14.696.404 1.894-1.409 1.814-4.539-.143-5.586-1.099-.588-19.238-.77-19.237-.194m37.449-.346l-9.231.112-1.023 1.022c-2.244 2.244-.825 5.293 2.709 5.823 6.363.954 12.658-.464 15.189-3.421 1.246-1.456 2.484-3.946 1.86-3.739-.15.05-4.427.141-9.504.203m-12.546 46.661l-15.528 5.544v20.158h64.514l-.133-9.472-.133-9.473-1.241-2.639c-1.616-3.436-4.581-6.403-8.135-8.139l-2.723-1.331-10.547-.096-10.547-.095-15.527 5.543m-6.867 9.161c.89.806.926 2.769.068 3.718-1.41 1.558-4.432.314-4.432-1.825 0-2.105 2.792-3.315 4.364-1.893m14.453 0c.89.806.926 2.769.068 3.718-1.22 1.348-3.759.718-4.201-1.042-.629-2.508 2.255-4.375 4.133-2.676m-14.332 9.754c1.02 1.02.637 3.309-.676 4.041-2.2 1.224-4.672-1.542-3.279-3.669.781-1.191 2.933-1.394 3.955-.372m14.453 0c1.02 1.02.637 3.309-.676 4.041-2.199 1.224-4.672-1.542-3.279-3.669.781-1.191 2.933-1.394 3.955-.372"
          fill="#f3cb83"
        />
        <Path
          d="M242.578 137.622c0 .067.571.639 1.27 1.27l1.269 1.147-1.147-1.269c-1.07-1.184-1.392-1.45-1.392-1.148m-1.562 6.25c0 .067.571.639 1.269 1.27l1.27 1.147-1.148-1.269c-1.069-1.184-1.391-1.45-1.391-1.148m9.375 1.172c0 .067.571.639 1.269 1.27l1.27 1.147-1.148-1.27c-1.069-1.183-1.391-1.449-1.391-1.147m22.851 4.565c.839.86 1.614 1.563 1.721 1.563.108 0-.491-.703-1.33-1.563-.839-.859-1.614-1.562-1.721-1.562-.108 0 .491.703 1.33 1.562m-24.414 1.685c0 .067.571.639 1.27 1.27l1.269 1.147-1.147-1.27c-1.07-1.183-1.392-1.449-1.392-1.147m9.375 1.172c0 .067.571.638 1.27 1.27l1.269 1.147-1.147-1.27c-1.07-1.183-1.392-1.449-1.392-1.147m-1.953 5.859c0 .068.571.639 1.27 1.27l1.269 1.147-1.147-1.269c-1.07-1.184-1.392-1.449-1.392-1.148m-121.87 36.499c.004 5.981.168 8.506.731 11.231 3.201 15.51 16.583 26.519 32.272 26.552l5.078.01 2.734-1.499c5.734-3.145 10.726-7.758 13.845-12.794l1.11-1.793-2.399.97c-4.768 1.928-15.628 1.643-18.416-.483-1.201-.916-1.223-.918-2.169-.184-3.508 2.725-16.028 2.588-20.833-.227-5.483-3.214-8.782-11.704-7.12-18.326.686-2.733 4.928-1.631 4.928 1.281 0 1.792 1.109 2.001 10.646 2.001 9.26 0 10.69.209 12.484 1.833.643.581.753.581 1.396 0 1.793-1.624 3.223-1.833 12.484-1.833 10.023 0 10.183-.04 10.988-2.726.328-1.094.786-1.722 1.437-1.97.94-.358.955-.437.955-5.06v-4.698h-60.156l.005 7.715m162.594-.879c.004.86.084 1.165.177.679.094-.486.09-1.189-.008-1.562-.097-.374-.174.024-.169.883M195.099 226.66l-1.544 1.66 1.66-1.544c.913-.849 1.66-1.596 1.66-1.66 0-.296-.34 0-1.776 1.544m79.489 8.789l-1.346 1.465 1.465-1.346c1.363-1.253 1.644-1.584 1.346-1.584-.065 0-.724.66-1.465 1.465m-121.072 3.711v4.087l7.295 2.557 7.295 2.556 7.158-2.554 7.158-2.554v-4.089c0-3.321-.102-4.051-.54-3.883-8.478 3.253-20.112 3.288-27.683.082-.626-.265-.683.055-.683 3.798m128.692 7.031l-1.544 1.661 1.66-1.545c1.544-1.436 1.84-1.776 1.544-1.776-.063 0-.811.747-1.66 1.66"
          fill="#d3eafa"
        />
      </G>
    </Svg>
  )
}