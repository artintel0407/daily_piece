const pieces = [
  {
    id: 1,
    day: 1,
    date: "2026-05-25",
    title: "Daily Pieces 프로젝트 기획",
    category: "Planning",
    summary: "매일 만든 작은 결과물을 카드처럼 쌓는 개인 작업 아카이브 웹사이트의 방향성을 정했다.",
    thumbnailText: "Daily\nPieces",
    description:
      "오늘은 Daily Pieces라는 프로젝트를 시작했다. 이 웹사이트는 감성적인 작업, 생산적인 작업, 공부 정리, AI 실험 등 매일 만든 작은 결과물을 하나씩 카드로 기록하는 공간이다.",
    note:
      "완성도보다 축적을 우선하기로 했다. 거창한 작품이 아니어도 오늘 만든 하나의 조각을 남기면, 시간이 지나 하나의 아카이브가 될 수 있다."
  },
  {
    id: 2,
    day: 2,
    date: "2026-05-26",
    title: "The Cabinet of Lost Thoughts",
    category: "Creative",
    summary: "잊힌 생각들이 사라지지 않고 작은 서랍 속에 조용히 보관되는 장면을 이미지로 만들었다.",
    thumbnailText: "Lost\nThoughts",
    image: "images/cabinet-of-lost-thoughts.png",
    description:
      "The Cabinet of Lost Thoughts는 잊힌 생각들이 완전히 사라지는 것이 아니라, 어딘가의 작은 서랍 속에 조용히 보관되고 있을지도 모른다는 상상에서 시작한 이미지 작업이다. 오래된 서랍장, 빛나는 메모 조각, 유리병과 책들은 사라진 아이디어들이 다시 발견되기를 기다리는 공간처럼 보이도록 구성했다.",
    note:
      "처음에는 인간형 존재를 중심으로 이미지를 만들었지만, 손 표현이 계속 신경 쓰였다. 그래서 존재 자체를 사물과 공간으로 바꾸었고, 오히려 Daily Pieces의 방향성과 더 잘 맞는 결과가 나왔다. 앞으로는 인간형보다 사물, 공간, 구조, 상징 중심의 이미지를 더 활용하기로 했다."
  },
  {
    id: 3,
    day: 2,
    date: "2026-05-26",
    title: "GitHub Pages 배포 완료",
    category: "Project",
    summary: "Daily Pieces 프로젝트를 GitHub에 연결하고 GitHub Pages로 배포했다.",
    thumbnailText: "GitHub\nPages",
    description:
      "오늘은 Daily Pieces 프로젝트를 GitHub 저장소에 연결하고 GitHub Pages를 통해 배포했다. 이제 작업물이 내 컴퓨터 안에만 머무는 것이 아니라, 실제 웹 주소를 통해 확인할 수 있는 형태가 되었다.",
    note:
      "작은 배포지만 프로젝트가 로컬 작업물에서 공개 가능한 웹페이지로 넘어간 기록이다. 앞으로 만든 카드와 작업물을 계속 쌓아갈 수 있는 기반이 만들어졌다."
  },
  {
    id: 4,
    day: 3,
    date: "2026-05-27",
    title: "The Museum of Tiny Errors",
    category: "Creative",
    summary: "작은 오타와 헷갈리는 기호들이 박물관 유물처럼 전시된 장면을 이미지로 만들었다.",
    thumbnailText: "Tiny\nErrors",
    image: "images/museum-of-tiny-errors.png",
    description:
      "The Museum of Tiny Errors는 아주 작은 실수들이 생각보다 긴 길을 돌아가게 만든다는 경험에서 출발한 이미지 작업이다. daily와 daliy, i와 l, 하이픈과 언더스코어처럼 사소해 보이는 차이들이 유리 진열장 속 유물처럼 보관된 박물관을 상상했다.",
    note:
      "오늘은 GitHub 저장소 이름과 remote 주소 문제를 해결하는 과정에서 작은 문자 하나가 얼마나 큰 차이를 만드는지 체감했다. 답답한 시간이었지만, 그 실수를 그냥 넘기지 않고 하나의 작업 주제로 바꾸면서 Daily Pieces의 세 번째 조각으로 남겼다."
  },
  {
    id: 5,
    day: 4,
    date: "2026-05-28",
    title: "The Garden of Sleeping Stars",
    category: "Creative",
    summary: "별이 꽃처럼 피어나고 성운이 정원처럼 펼쳐진, 고요한 우주의 정원을 이미지로 만들었다.",
    thumbnailText: "Sleeping\nStars",
    image: "images/garden-of-sleeping-stars.png",
    description:
      "The Garden of Sleeping Stars는 우주 어딘가에 조용히 잠들어 있는 별들의 정원을 상상하며 만든 이미지 작업이다. 꽃처럼 피어난 별빛, 성운이 드리운 하늘, 천문대처럼 보이는 구조물과 빛나는 식물들은 이곳이 단순한 풍경이 아니라 별들이 씨앗처럼 자라나는 장소처럼 느껴지도록 구성했다.",
    note:
      "이번 작업은 심해나 미지의 자연처럼 인간의 손이 닿지 않은 세계를 떠올리다가, 우주를 하나의 정원으로 바라보는 상상에서 출발했다. 차갑고 먼 공간으로 보이기 쉬운 우주를, 조용하고 아름답고 생명감 있는 장소처럼 표현해보고 싶었다."
  },
  {
    id: 6,
    day: 5,
    date: "2026-05-29",
    title: "The City of Many Minds",
    category: "Creative",
    summary: "수많은 사람, AI, 데이터 흐름이 하나의 거대한 신경망처럼 연결된 미래 도시를 이미지로 만들었다.",
    thumbnailText: "Many\nMinds",
    image: "images/city-of-many-minds.png",
    description:
      "The City of Many Minds는 AI 시대의 미래 도시를 상상하며 만든 이미지 작업이다. 도시의 건물, 교통망, 데이터 흐름, 에너지 네트워크가 하나의 거대한 신경망처럼 연결되어 있고, 중앙의 빛나는 코어는 수많은 지식과 판단이 모이는 집단지능의 중심처럼 보이도록 구성했다.",
    note:
      "이번 작업은 AI가 인간을 완전히 대체한다기보다, AI를 잘 활용하는 개인과 조직이 더 빠르게 실행하고 성장할 수 있다는 생각에서 출발했다. 미래 도시는 단순히 높은 건물이 많은 공간이 아니라, 사람과 기술, 데이터와 시스템이 서로 연결되어 더 빠르게 실험하고 실행하는 공간일지도 모른다."
  },
  {
    id: 7,
    day: 6,
    date: "2026-05-30",
    title: "The Archive at the End of Time",
    category: "Creative",
    summary: "시간의 끝에 남겨진 거대한 아카이브를 상상하며, 사라진 문명과 미래의 기록이 함께 보관된 공간을 이미지로 만들었다.",
    thumbnailText: "End of\nTime",
    image: "images/archive-at-end-of-time.png",
    description:
      "The Archive at the End of Time은 모든 시간이 지나간 뒤에도 남아 있는 마지막 기록 보관소를 상상하며 만든 이미지 작업이다. 거대한 서가, 떠다니는 문서함, 빛나는 두루마리, 모래시계, 별빛으로 이어진 먼 풍경이 사라진 문명과 미래의 데이터가 함께 보관된 공간처럼 느껴지도록 구성했다.",
    note:
      "오늘은 시간의 끝에 남겨진 아카이브라는 장면에 마음이 끌렸다. 매일 남기는 작은 작업은 당장 거창해 보이지 않아도, 시간이 지나면 하나의 기록이 되고 오래 남는 흔적이 된다. 이 이미지는 그런 조각들이 시간의 끝에서도 조용히 보관되어 있는 모습을 상상하며 만든 작업이다."
  },
  {
    id: 8,
    day: 7,
    date: "2026-05-31",
    title: "The Lake That Holds the Moon",
    category: "Creative",
    summary: "고요한 밤의 호수 위에 실제 크기에 가까운 보름달이 은은하게 비치는 장면을 이미지로 만들었다.",
    thumbnailText: "Moonlit\nLake",
    image: "images/moonlit-lake.png",
    description:
      "The Lake That Holds the Moon은 밤하늘의 달이 조용한 호수 위에 비치는 장면을 상상하며 만든 이미지 작업이다. 과장된 판타지 달보다 실제로 밤하늘에서 바라보는 달의 크기에 가까운 느낌을 살리고, 잔잔한 물결과 먼 산, 숲의 실루엣이 달빛 아래 차분하게 이어지도록 구성했다.",
    note:
      "오늘은 실제로 본 보름달처럼 뜬 달이 인상에 남아 달을 주제로 정했다. 처음에는 달이 너무 크게 표현되어 다시 조정했고, 최종적으로는 밤하늘에 자연스럽게 떠 있는 달과 그 빛이 호수에 조용히 번지는 장면을 남겼다."
  },
  {
    id: 9,
    day: 8,
    date: "2026-06-01",
    title: "A Well-Balanced Study Day",
    category: "Study",
    summary: "05.31 공부 기록을 바탕으로, 통계학·Vue·CodeTree·영어 루틴·Daily Pieces까지 균형 있게 진행한 하루를 정리했다.",
    thumbnailText: "Study\n9/10",
    image: "images/study-record-9-out-of-10.png",
    description:
      "A Well-Balanced Study Day는 05.31 공부 기록을 Daily Pieces 카드로 정리한 작업이다. 통계학 상관분석 PDF와 개념 문제, 상관계수 계산 및 검정 문제를 확인했고, Vue checkbox/radio 핵심 문법 복습, CodeTree, 영어 루틴, Daily Pieces, 웹강 퀴즈, 집 청소까지 마무리했다. 단순히 많은 일을 한 날이라기보다, 막히는 부분을 실제로 정리하고 컨디션을 고려해 적절히 멈춘 날로 기록했다.",
    note:
      "오늘 카드는 Creative 이미지가 아니라 공부 기록을 주제로 삼았다. Daily Pieces가 이미지 작업만 쌓는 공간이 아니라, 공부·프로젝트·회고·작은 성취까지 남기는 아카이브라는 점을 다시 확인한 날이다. 05.31 최종 점수는 9/10으로 정리했고, 꾸준히 쌓아가는 공부 흐름을 하나의 조각으로 남겼다."
  }
];