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
  },
  {
    id: 10,
    day: 9,
    date: "2026-06-02",
    title: "The Forest of Depth-First Paths",
    category: "Creative",
    summary: "그래프 탐색 개념에서 떠올린 장면을 바탕으로, 빛나는 길들이 깊게 이어지는 신비로운 숲 이미지를 만들었다.",
    thumbnailText: "Depth-\nFirst Forest",
    image: "images/forest-of-depth-first-paths.png",
    description:
      "The Forest of Depth-First Paths는 오늘 배운 그래프, DFS, BFS, DAG, 위상 순서 개념에서 출발한 이미지 작업이다. 그중에서도 DFS의 ‘한 길을 끝까지 따라가고, 막히면 다시 돌아와 다른 길로 나아가는 흐름’을 숲 속 탐험 장면으로 바꾸어 표현했다. 어두운 숲 사이로 빛나는 길과 연결 지점들이 그래프의 정점과 간선처럼 이어지고, 전체 풍경은 하나의 거대한 탐색 구조처럼 보이도록 구성했다.",
    note:
      "오늘은 공부한 알고리즘 개념을 그대로 정리하는 대신, 그것에서 떠오른 이미지를 자유 주제로 풀어냈다. 특히 숲이라는 장면에 끌렸고, DFS의 탐험 감각이 신비로운 길과 연결 구조로 자연스럽게 이어졌다. 내일부터는 시리즈물 방향도 다시 논의해볼 예정이지만, 오늘은 우선 그래프 개념이 녹아든 자유 이미지 한 장을 Daily Pieces의 9일차 기록으로 남겼다."
  },
  {
    id: 11,
    day: 10,
    date: "2026-06-03",
    title: "The Gate of the Silent Tower",
    category: "Creative",
    summary: "탑 등반 시리즈의 시작으로, 안개 속 거대한 탑 입구와 첫 번째 봉인된 문을 담은 이미지를 만들었다.",
    thumbnailText: "Silent\nTower",
    image: "images/gate-of-the-silent-tower.png",
    description:
      "The Gate of the Silent Tower는 새롭게 시작하는 탑 등반 시리즈의 첫 장면이다. 안개에 둘러싸인 거대한 탑과 그 아래 봉인된 문은, 이제 막 긴 여정이 시작된다는 분위기를 담고 있다. 차가운 돌벽, 희미하게 빛나는 문양, 어둡고 웅장한 하늘을 통해 탑 전체가 오래된 시험의 장소처럼 보이도록 구성했다.",
    note:
      "이번 작업은 앞으로 8~10일 정도 이어갈 탑 등반 시리즈의 1화에 해당한다. 각 층마다 고유한 공간과 그 층을 지키는 수호자가 있는 구조로 진행할 생각이며, 오늘은 그 출발점인 탑의 입구를 먼저 기록했다. 복잡한 설정을 깊게 짜기보다는, 직관적으로 이어가기 쉬운 시리즈 흐름을 만드는 데 초점을 두었다."
  },
  {
    id: 12,
    day: 11,
    date: "2026-06-04",
    title: "The Silent Tower - Episode 02: The First Guardian",
    category: "Creative",
    summary: "침묵의 탑 시리즈 2화로, 탑 내부의 첫 번째 홀에서 거대한 수호자와 마주하는 장면을 이미지로 만들었다.",
    thumbnailText: "First\nGuardian",
    image: "images/silent-tower-episode-02-first-guardian.png",
    description:
      "이번 작업은 침묵의 탑 시리즈의 두 번째 장면이다. 탑의 문을 지나 내부로 들어선 뒤, 첫 번째 층의 중심 홀에서 거대한 수호자와 마주하는 순간을 표현했다. 높은 천장에서 내려오는 빛, 차가운 석조 기둥, 사슬과 등불이 걸린 어두운 공간, 그리고 묵직한 무기를 든 갑옷형 수호자를 중심으로 배치해 첫 전투 직전의 긴장감을 담았다.",
    note:
      "1화가 탑의 입구와 시작의 분위기를 보여주는 장면이었다면, 2화는 이 시리즈의 핵심 방향인 '각 층마다 고유한 수호자가 존재한다'는 설정을 본격적으로 드러내는 조각이다. 너무 과한 스케일보다는 실제로 눈앞에서 마주친 듯한 위압감에 집중했고, 앞으로도 층이 올라갈수록 공간과 수호자의 개성이 점점 강해지는 흐름으로 이어갈 예정이다."
  },
  {
    id: 13,
    day: 11,
    date: "2026-06-04",
    title: "Moonlit Sleepy Cat",
    category: "Creative",
    summary: "달빛 아래 잠든 고양이를 통해 피곤한 밤, 그냥 푹 자고 싶은 마음을 이미지로 남겼다.",
    thumbnailText: "Sleepy\nCat",
    image: "images/moonlit-sleepy-cat.png",
    description:
      "오늘은 무언가 거창한 장면보다, 피곤한 상태에서 자연스럽게 떠오른 감정을 담아 보고 싶었다. 달빛이 비치는 밤, 포근한 쿠션 위에서 잠든 고양이는 지금의 내 마음처럼 아무 생각 없이 쉬고 싶다는 감정을 상징한다. 전체적으로는 너무 어둡지 않게, 부드럽고 편안한 분위기가 느껴지도록 구성했다.",
    note:
      "오늘은 꽤 피곤했지만, 그 상태 자체를 하나의 주제로 바꾸니 오히려 작업이 더 자연스럽게 이어졌다. 그냥 자고 싶다는 단순한 감정도 Daily Pieces에서는 충분히 하나의 조각이 될 수 있다는 걸 보여준 작업이다."
  },
  {
    id: 14,
    day: 12,
    date: "2026-06-05",
    title: "The Silent Tower - Episode 03: The Lantern Serpent",
    category: "Creative",
    summary: "침묵의 탑 시리즈 3화로, 어두운 계단 홀을 감싸는 등불 뱀 수호자를 이미지로 만들었다.",
    thumbnailText: "Lantern\nSerpent",
    image: "images/silent-tower-episode-03-lantern-serpent.png",
    description:
      "The Silent Tower - Episode 03: The Lantern Serpent는 침묵의 탑 시리즈의 세 번째 장면이다. 첫 번째 수호자였던 갑옷형 존재와 달리, 이번에는 긴 몸을 가진 뱀 또는 용 형태의 수호자가 탑 내부의 거대한 홀과 계단을 감싸고 있는 모습을 표현했다. 어두운 석조 공간, 매달린 등불, 희미한 빛이 번지는 바닥을 통해 너무 밝지는 않지만 장면이 잘 보이는 어두운 판타지 분위기를 만들었다.",
    note:
      "처음 생성한 이미지는 분위기는 좋았지만 너무 어두워서 세부 구조가 잘 보이지 않았다. 이후 전체적인 어두운 톤과 뱀 수호자 구조는 유지하되, 등불과 공간의 빛을 조금 더 살려서 시야가 확보되는 방향으로 다시 조정했다. 2화의 갑옷 수호자와 겹치지 않도록 이번 화는 비인간형 수호자로 방향을 바꾼 점이 핵심이다."
  }
];