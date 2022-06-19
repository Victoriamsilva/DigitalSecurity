import VideoSrc from "../../Assets/video/video-a3.mp4";
import * as S from "./styles";

export default function Video() {
  return (
    <S.VideoWrapper>
      <S.Video src={VideoSrc} className="banner" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </S.Video>
    </S.VideoWrapper>
  );
}