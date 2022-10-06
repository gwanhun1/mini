import React, { useState } from "react";
import "./Main.scss";
import Comment from "./comment";
function Main() {
  const [idnum, setIdnum] = useState([]);
  const [num, setNum] = useState(0);
  const [ttext, setTtext] = useState([]);
  const [cm, setCm] = useState("");

  console.log(idnum);
  const delid = (event) => {
    let newArr = idnum.filter((item) => {
      console.log("event id => ", event.target.id);
      console.log("item id => ", item.id);
      return event.target.id !== item.id;
    });
    setTtext(newArr);
    // setTtext(idnum);
  };
  const commnetClick = () => {
    if (cm === "") {
      return;
    }
    setNum(num + 1);
    setTtext([...ttext, cm]);
    setIdnum([
      ...idnum,
      {
        id: num,
        comment: cm,
      },
    ]);
    setCm("");
  };

  const textComment = (e) => {
    setCm(e.target.value);
  };
  return (
    <React.Fragment>
      <body>
        <nav>
          <div className="navBox">
            <div className="left">
              <div className="icon">
                <a href="/main.html">
                  <img
                    alt="instagram"
                    src="/images/instagram.png"
                    className="instagram"
                  />
                </a>
              </div>
              <div className="logo">
                <a href="/main.html">Westagram</a>
              </div>
            </div>
            <div className="searchBox">
              <input type="text" className="search" placeholder="검색" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="right">
              <img
                alt="explore"
                src="/images/explore.png"
                className="rightExplore"
              />
              <img alt="heart" src="/images/heart.png" className="rightHeart" />
              <img
                alt="profile"
                src="/images/profile.png"
                className="rightProfile"
              />
              <div className="navMe">
                <div className="navMeBox">
                  <div className="navMeBoxPro">
                    <div className="Me">
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div clasclassNames="MeText">프로필</div>
                  </div>
                  <div className="navMeBoxSave">
                    <div className="Save">
                      <i className="fa-regular fa-bookmark"></i>
                    </div>
                    <div className="SaveText">저장됨</div>
                  </div>
                  <div className="navMeBoxSet">
                    <div className="Setting">
                      <i className="fa-solid fa-gear"></i>
                    </div>
                    <div className="SettingText">설정</div>
                  </div>
                  <div className="navMeBoxOut">
                    <div className="logOut">로그아웃</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="mainPage">
            <div className="mainCenter">
              <div className="mainbox">
                <div className="mainFaceBox">
                  <div className="mainFace"></div>
                  <div className="mainFaceId">JungGwanHun</div>
                  <div className="dot">
                    <i className="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
                <div className="article">
                  <img alt="photo" src="/images/photo.jpg" className="photo" />
                </div>
                <div className="bottomBox">
                  <div className="bottomBoxUp">
                    <div className="bottomBoxUpEmoji">
                      <div className="heart">
                        <i className="fa-solid fa-heart"></i>
                      </div>
                      <div className="comment">
                        <i className="fa-regular fa-comment"></i>
                      </div>
                      <div className="share">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </div>
                    </div>
                    <div className="bottomBoxUpTag">
                      <div className="bookMark">
                        <i className="fa-regular fa-bookmark"></i>
                      </div>
                    </div>
                  </div>
                  <div className="bottomBoxMid">
                    <div className="bottomBoxMidIcon"></div>
                    <div className="bottomBoxMidId">
                      Dog3님 외<div className="number">3</div>
                      명이 좋아합니다.
                    </div>
                  </div>
                  <div className="bottomBoxDown">
                    <div className="bottomBoxDownComment">
                      <div>
                        {ttext.map((cm, idnum) => (
                          <Comment idnum={idnum} Cm={cm} delid={delid} />
                        ))}
                      </div>
                    </div>
                    <div className="bottomBoxDownHeart"></div>
                  </div>
                </div>
                <div className="mainFooter">
                  <input
                    type="text"
                    className="mainFooterInput"
                    placeholder="댓글 달기..."
                    onChange={textComment}
                  ></input>
                  <div className="buttonClick" onClick={commnetClick}>
                    게시
                  </div>
                </div>
              </div>
              <div className="mainRight">
                <div className="mainRightIconBox">
                  <div className="mainRightIcon"></div>
                  <div className="mainRightId">
                    wecode_bootcamp
                    <br />
                    WeCode I 위코드
                  </div>
                </div>
                <div className="storyBox">
                  <div className="storyBoxUp">
                    <div className="storyBoxUpLeft">스토리</div>
                    <div className="storyBoxUpRight">모두 보기</div>
                  </div>
                  <div className="storyBoxIdBox">
                    <div className="storyBoxIdBoxIconOne"></div>
                    <div className="storyBoxIdBoxIdOne">
                      dog1
                      <br />
                      15분 전
                    </div>
                  </div>
                  <div className="storyBoxIdBox">
                    <div className="storyBoxIdBoxIconTwo"></div>
                    <div className="storyBoxIdBoxIdTwo">
                      dog2
                      <br />
                      30분 전
                    </div>
                  </div>
                  <div className="storyBoxIdBox">
                    <div className="storyBoxIdBoxIconThree"></div>
                    <div className="storyBoxIdBoxIdThree">
                      dog3
                      <br />
                      2시간 전
                    </div>
                  </div>
                </div>
                <div className="recommendBox">
                  <div className="recommendUp">
                    <div className="recommendUpLeft">회원님을 위한 추천</div>
                    <div className="recommendUpRight">모두 보기</div>
                  </div>
                  <div className="recommendUpIdBox">
                    <div className="recommendUpIdBoxIconOne"></div>
                    <div className="recommendUpIdBoxIdOne">dog4</div>
                    <div className="recommendUpIdBoxFollowOne">팔로우</div>
                  </div>
                  <div className="recommendUpIdBox">
                    <div className="recommendUpIdBoxIconTwo"></div>
                    <div className="recommendUpIdBoxIdTwo">dog5</div>
                    <div className="recommendUpIdBoxFollowTwo">팔로우</div>
                  </div>
                  <div className="recommendUpIdBox">
                    <div className="recommendUpIdBoxIconThree"></div>
                    <div className="recommendUpIdBoxIdThree">dog6</div>
                    <div className="recommendUpIdBoxFollowThree">팔로우</div>
                  </div>
                </div>
                <div className="contact">
                  instagram 정보 . 지원 . 홍보 센터 . API . <br />
                  채용 정보 . 개인정보처리방침 . 약관 . <br />
                  디렉터리 . 프로필 . 해시태그 . 언어
                  <br />
                  <br />@ 2019 INSTAGRAM
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </React.Fragment>
  );
}
export default Main;
