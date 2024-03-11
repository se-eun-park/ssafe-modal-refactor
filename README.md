# SSAFE 5주차 MISSION: Modal Component

5주차 주니어 미션은 Modal Component 만들기 입니다.

모달 컴포넌트를 제대로 만들기 위해선 먼저 **모달**에 대해 알아야겠죠 ? 

모달에 대해 자세히 설명한 레퍼런스가 있어서 공유드립니다 ! 

작업전에 반드시 읽어주세요 !! 

[컴포넌트 스터디: ①팝업, 바텀시트, 스낵바 | 요즘IT](https://yozm.wishket.com/magazine/detail/1272/)

이번 프로젝트의 목표는 ‘**재사용 가능한 모달 컴포넌트 만들기**’ 입니다.  

아래 **필수 요구 사항**은 모두 구현하여야 하고, **선택 요구 사항**은 적어도 3개 이상 구현하는 것을 목표로 해주세요.

아래 **피그마** 링크를 바탕으로 개발을 진행해주세요. 피그마에 구현된 디자인은 margin, padding과 같은 상세한 값을 확인할 수 있기 때문에 UI를 구성할 때 도움이 됩니다. 

### 필수 요구 사항

- 기존 작업물을 사용해서 작업을 진행해주세요.
- 로그인 버튼을 누르면 ‘**간편 로그인**’ 작업을 진행합니다.
    - 기존 로그인 API는 사용하지 않습니다.
    - 사용자에게 닉네임을 입력받는 모달을 생성합니다.
    - 입력 받은 닉네임은  Myspace 페이지에서 프로필로 사용됩니다.
- Myspace페이지는 다음과 같은 기능을 포함하고 있습니다.
    - 우측 상단에 프로필을 표시합니다. 프로필은 입력받은 닉네임을 바탕으로 표시합니다. 영문, 국문과 상관없이 닉네임의 첫글자를 프로필로 표시합니다.
        - e.g. 성재 → 성 / Kwak → K / kwak → k
    - 더미데이터를 이용하여 4개의 설문지 카드를 만들어주세요.
    - ‘보관함’과 ‘참여한 설문’탭이 있습니다. 탭을 만들기만 해주세요. ‘참여한 설문’탭은 현재는 disable 상태입니다.
    - ‘**새 설문 만들기 버튼**’을 누르면 새로운 설문지를 작성하는 모달창이 표시됩니다.
        - 설문지 작성은 ‘**설문지 이름, 설문지 설명, 태그**’를 입력받습니다.
        - 설문지 이름과 설문지 설명은 필수로 입력받습니다.
        - 태그의 입력은 선택사항입니다.
        - 태그의 입력방식은 다음과 같습니다.
            - #태그입력 에 마우스를 클릭 시 태그를 입력할 수 있습니다.
            - 태그 내용을 입력한 후 엔터키를 누르면 태그가 생성되고, 우측에 새롭게 #태그입력 input box가 생성됩니다.
            - 태그 내용을 입력한 후 엔터키를 누르면 자동으로 색상을 부여합니다. (색상 팔레트 제공)
        - 입력을 완료한 후 ‘확인’ 버튼을 누르면 설문이 작성됩니다.
    - 새롭게 작성된 설문은 ‘Myspace’에 표시됩니다. (Myspace - 새로운 카드 생성) 이 때 작성일은 ‘**현재 날짜**’로 표시됩니다.

### 선택 요구 사항(단일)

- Myspace에 표시된 설문 카드를 클릭하여 내용을 수정할 수 있습니다.
    - 마이스페이스에 있는 설문 카드를 클릭하면 수정 모달이 표시됩니다.
    - 이름, 설명, 태그 전부 수정 가능합니다.
    - 수정 완료 후 ‘확인’ 버튼을 누르면 설문이 작성됩니다.
- 수정된 설문은 ‘Myspace’에 표시됩니다. 이 때 ‘작성일’은 ‘**수정일**’로 변경되며, ‘**수정한 날짜**’가 표시됩니다.
    - e.g. 작성일: 2024/03/01 → 수정일: 20204/03/11

### 기간

1차: 3월 14일(목) ~ 3월 20일(수) 오후 6시

2차: 3월 21일(목) ~ 3월 27일(수) 오후 6시

### 제출 방법

https://github.com/SSA-FE/ssafe-modal

1. 위 레포를 자신의 레포지토리로 fork해 갑니다.
2. 이슈 단위로 브랜치를 나누어 작업합니다.
3. 기능내 세부 기능이 완료될 때마다 커밋을 진행합니다.
4. 작업이 모두 완료된 후 메인 레포지토리에 pull request를 전송합니다.

### 참고용 피그마 링크

https://www.figma.com/file/DgURHQ6ckAy4lfMIf3hbEU/%EC%A3%BC%EB%8B%88%EC%96%B4%EA%B3%BC%EC%A0%9C---Modal?type=design&node-id=0-1&mode=design&t=dPXb1QMrRXVePA7Q-0
