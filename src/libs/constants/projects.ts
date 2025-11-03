import { Project } from "../types";

export const WHIPLASH: Project = {
  name: "whiplash",
  role: "ALL",
  team: "private",
  period: "3일",
  address: "https://elegant-gingersnap-09d3ef.netlify.app/",
  gitRepo: "https://github.com/bjiwon324/whiplash-fan-page",
  logo: "/icons/Whiplash-logo.svg",
  skills: ["photoshop", "illustrator", "HTML", "CSS", "Javascript", "JQuery"],
  pointDescriptions: ["화승 웹사이트를 벤치마킹한 whiplash 영화의 팬페이지"],
  myJobs: [{ description: "모든 작업 단독 수행" }]
};

export const BINDER: Project = {
  name: "binder",
  report:
    "https://www.figma.com/deck/G0v3LES5oK7kD2a75jqnmd/Binder-PPT?node-id=5-117&t=9dQRvo03zUYcEcVC-1",
  skills: [
    "Next.js",
    "Vercel",
    "Sass(SCSS)",
    "React Query",
    "Axios",
    "React hook form",
    "Jotai",
    "Github",
    "뤼이도",
    "Notion",
    "Figma"
  ],
  role: "프론트엔드",
  pointDescriptions: [
    "주변 공공 쓰레기통을 찾아주는 사이트",
    "초기 기획부터 서비스 홍보까지 팀원들과 함께 작업",
    "스위프 6기 해커톤 우승"
  ],
  textLogo: "/icons/binder-logo-text.svg",
  logo: "/icons/binder-logo.svg",
  team: ["기획자 1 명", "디자이너 1명", "프론트엔드 2명", "백엔드 2명"],
  period: "2024.09 - 2024.10",
  address: "https://binder-front-end-324s-projects.vercel.app/",
  gitRepo: "https://github.com/binder-binFinder/binder-front-end",
  // troubleShootings: [
  //   {
  //     title: "",
  //     problemSituation: "",
  //     process: [],
  //     result: []
  //   }
  // ],
  myJobs: [
    {
      description: "Kakao map Api와 연동하여 쓰레기통의 위치 나타냄",
      img: "/images/binder/bin-location.png"
    },
    {
      description: "react hook form 을 활용하여 쓰레기통 등록 기능 구현",
      img: "/images/binder/add-new-location.png"
    },
    {
      description: "UX/UI를 고려하여 드롭다운 모달로 신고 기능 구현",
      img: "/images/binder/report-bin.png"
    },
    {
      description: "공통 컴포넌트를 활용하여 관리자 페이지의 심사기능 구현",
      img: "/images/binder/judgment-bin.png"
    }
  ]
};

export const GLOBAL_NOMAD: Project = {
  name: "Global-Nomad",
  role: "프론트엔드",
  team: ["프론트엔드 5명"],
  period: "2024.03 - 2024.04",
  address: "https://global-nomad.vercel.app/",
  gitRepo: "https://github.com/Codeit-sprint2-4-5/global-nomad",
  skills: [
    "Typescript",
    "Next.js",
    "Sass(SCSS)",
    "TanStack Query",
    "Axios",
    "React-hook-form",
    "Github",
    "Figma"
  ],
  pointDescriptions: [
    "다양한 체험 상품을 보고 간단하게 예약 할 수 있는 서비스 플랫폼"
  ],
  logo: "/icons/global-nomad-logo.svg",
  textLogo: "/icons/global-nomad-text-logo.svg",
  troubleShootings: [
    {
      title: "서버 데이터 기반 추가 요청 시스템 구현(derived state)",
      problemSituation:
        "프로젝트 진행 중 하나의 컴포넌트에서 서버로부터 데이터를 받아오고, 그 데이터를 기반으로 추가적인 데이터를 서버에 요청해야 하는 상황에 직면했습니다. 이 과정에서 데이터의 동기화 문제와 캐싱 오류가 발생할 가능성이 있어, 사용자 경험에 부정적인 영향을 미칠 우려가 있었습니다. 기존 상태 관리 방식으로는 데이터 간의 의존성 문제를 해결하는 것이 복잡하고 비효율적이라고 판단했습니다.",
      process: [
        {
          littleTitle: "상태관리 방식의 개선 필요성 인식 ",
          text: " 서버 상태를 관리하고, 데이터 간의 의존성을 효과적으로 처리하기 위해 적합한 상태관리 라이브러리의 필요성을 느꼈습니다. 여러 라이브러리를 조사한 결과, TanStack Query가 서버 상태관리에 특화되어 있음을 발견하고, 팀원들에게 사용을 제안하였습니다.",
          more: "TanStack Query의 강점 : 서버 데이터 캐싱, 자동화된 데이터 업데이트, 그리고 derived state를 통한 상태관리의 편리함을 제공."
        },
        {
          littleTitle: "TanStack Query 도입 ",
          text: "협의를 통해해 TanStack Query를 학습하고 도입하였습니다. 이를 통해 서버로부터 받은 데이터를 기반으로 추가 데이터 요청이 자동으로 처리되도록 설정하였으며, 데이터 간의 의존성을 관리하면서 상태의 일관성을 유지하는 데 큰 도움을 받았습니다."
        },

        {
          littleTitle: "관심사의 분리 및 코드 가독성 향상",
          text: "TanStack Query를 사용함으로써 비즈니스 로직과 상태관리 로직을 분리하였고, 이로 인해 코드의 가독성이 높아졌으며, 데이터 관리의 복잡성도 크게 감소하였습니다. 상태관리가 자동화되면서 애플리케이션의 성능 최적화와 유지보수도 수월해졌습니다."
        }
      ],
      result: [
        "TanStack Query를 통해 데이터 간의 의존성 문제를 해결하고, 상태관리의 복잡성을 대폭 줄였습니다.",
        "관심사의 분리를 통해 코드 가독성이 향상되었고, 서버 상태관리 효율성이 크게 증대되었습니다."
      ]
    },
    {
      title: "공통 모달 컴포넌트 개발 및 최적화",
      problemSituation:
        "프로젝트 내 여러 페이지에서 다양한 형태의 모달 창을 사용해야 했습니다. 하지만 모달이 DOM 트리에서 특정 위치에 종속적으로 렌더링되는 경우, 모달이 화면 중앙이 아닌 불필요한 위치에 나타나거나, 특정 레이아웃과 충돌하는 문제가 발생했습니다. 특히, 네비게이션 바에서 호출된 모달이 다른 컴포넌트와 겹쳐 보이는 등 모달 배치의 유연성이 떨어졌고, 이로 인해 사용자 경험이 저하되었습니다.",
      process: [
        {
          littleTitle: "모달 렌더링 위치 문제 해결",
          text: "React의 createPortal 함수를 사용하여 모달을 특정 컴포넌트 트리와 분리해 원하는 위치에 자유롭게 렌더링할 수 있도록 변경했습니다. 변경 후 사용자가 특정 컴포넌트 내에서 자연스러운 흐름으로 모달을 보게 되었고, 유연한 배치가 가능해졌습니다."
        },
        {
          littleTitle: "모달 배치 유연성 극대화",
          text: "create Portal의 두 번째 인자로 DOM 요소를 동적으로 관리하는 방법을 도입했습니다. 이를 통해 모달이 필요한 위치에 동적으로 렌더링될 수 있도록 개선하였고, 이를 switch 문을 활용한 로직으로 구현하여 모달이 표시될 위치를 모달 타입에 따라 쉽게 지정할 수 있었습니다. 예를 들어, 특정 모달은 페이지의 중앙이 아닌 네비게이션 바에서 호출된 요소 위에 자연스럽게 표시될 수 있도록 배치를 조정했습니다."
        },
        {
          littleTitle: "타입 안정성과 재사용성 향상",
          text: "다양한 모달을 효율적으로 관리하기 위해 Modal Props 인터페이스를 도입하여 모달 컴포넌트의 props 타입을 명시적으로 정의했습니다. 이를 통해, 각 모달 타입에 맞는 컴포넌트와 필요한 props를 switch 문을 활용하여 명확히 할당함으로써 코드의 재사용성을 극대화했습니다. 모달의 타입과 위치를 명확하게 분리해 관리함으로써, 추후 다른 팀원이 쉽게 사용할 수 있고, 수정 및 유지보수가 편리해졌습니다."
        }
      ],
      result: [
        "모달 컴포넌트가 레이아웃에 종속되지 않고 유연하게 배치될 수 있도록 개선되었습니다.",
        "모달 컴포넌트를 재사용할 수 있는 구조로 만들어, 프로젝트 내 다양한 모달 사용 시 중복 코드를 최소화하고 유지보수가 쉬워졌습니다.",
        "타입 안정성을 보장하고 props 관리가 명확해짐으로써, 코드의 안정성이 증가했습니다.",
        "사용자 경험을 고려한 모달 배치로 인해 UI/UX가 크게 향상되었습니다."
      ]
    }
  ],
  myJobs: [
    {
      description:
        "Sass를 활용하여 반응형으로 화면이 크기에 따라 디자인, 세부 기능이 변화하는 컴포넌트 구현",
      img: "/images/global-nomad/floating-box.png"
    },
    {
      description: null,
      img: "/images/global-nomad/floating-box-mobile.png"
    },
    {
      description:
        "Next.js를 사용하여 모든 모달 창을 효율적으로 구현하고 유지보수를 용이하게 관리하기 위해 단일화",
      img: "/images/global-nomad/modal1.png"
    },
    {
      description: null,
      img: "/images/global-nomad/modal2.png"
    },
    {
      description: "체험 추가, 수정 페이지 구현",
      img: "/images/global-nomad/add-activity.png"
    }
  ]
};

export const TASKIFY: Project = {
  name: "Taskify",
  role: "프론트엔드",
  team: ["프론트엔드 5명"],
  period: "2024.01 - 2024.02",
  address: "https://taskify-three-xi.vercel.app/",
  gitRepo: "https://github.com/bjiwon324/taskify",
  skills: [
    "Typescript",
    "Next.js",
    "Sass(SCSS)",
    "TanStack Query",
    "Axios",
    "React-hook-form"
  ],
  pointDescriptions: [
    "동료들과 함께, 혹은 나만의 일정을 관리 가능한 일정 관리 플랫폼"
  ],
  logo: "/icons/taskify-logo.svg",
  textLogo: "/icons/Taskify-text-logo.png",
  troubleShootings: [
    {
      title: "페이지네이션",
      problemSituation:
        "페이지 전환 시 데이터 로딩이 지연되거나, 마지막 페이지에서 데이터가 중복되거나 비정상적으로 로드되는 문제가 발생했습니다. Tanstack Query를 활용한 상태관리에서 캐싱이 제대로 작동하지 않아 불필요한 API 호출이 자주 발생하였고, 이로 인해 서버 부하와 사용자 경험 모두 악화하는 상황이었습니다.",
      process: [
        {
          littleTitle: "데이터 중복 및 누락 문제 해결",
          text: "페이지네이션 로직에서 total page 값이 잘못 계산되어 페이지 이동 중 데이터가 중복되거나 누락되는 문제를 확인했습니다. total page 계산 로직을 면밀히 검토하고, 서버에서 반환되는 데이터의 총 개수를 기반으로 안정적인 계산 방식을 적용했습니다. 데이터를 받지 못하거나 오류가 발생하는 경우에도 최소 1 페이지를 보장하도록 설정해 페이지 이동 시 빈 페이지나 중복된 데이터가 표시되는 문제를 해결했습니다."
        },
        {
          littleTitle: "프리페칭으로 사용자 경험 개선",
          text: "페이지 전환 시 발생하는 로딩 지연을 해결하기 위해 Tanstack Query의 프리페칭(prefetching) 기능을 활용했습니다. 페이지 전환 전에 데이터를 미리 불러와 캐싱하는 방식으로, 사용자가 페이지를 클릭하면 즉시 다음 페이지 데이터를 확인할 수 있도록 최적화했습니다. 이로 인해 페이지 이동 시 로딩 시간이 거의 없어졌습니다."
        },
        {
          littleTitle: "API 호출 최적화로 성능 향상",
          text: "각 페이지마다 API 요청이 반복적으로 이루어지는 문제를 해결하기 위해, 이미 캐싱된 데이터는 다시 호출하지 않도록 React Query의 캐싱 로직을 재설계했습니다. 또한, 데이터 변경 시에는 캐시를 무효화하고 다시 불러오는 방식으로 실시간 데이터 동기화를 구현했습니다. 이를 통해 API 호출 수를 최소화하면서도 실시간 데이터 업데이트를 유지할 수 있었습니다."
        },
        {
          littleTitle: "대시보드의 동적인 UI 성능 개선",
          text: "페이지네이션 문제를 해결하는 과정에서 UI 성능도 함께 최적화했습니다. 페이지 이동 시 발생하는 애니메이션과 로딩 바를 최적화하여 부드러운 사용자 경험을 제공했습니다. 불필요한 re-rendering을 최소화하고, 스켈레톤 UI를 통해 로딩 중에도 빈 화면 대신 시각적 피드백을 제공하여 사용자 불만을 줄였습니다."
        }
      ],
      result: [
        "페이지 전환 속도가 프리페칭을 통해 크게 개선되었으며, 데이터 중복 및 빈 페이지 문제도 해결되었습니다.",
        "API 호출 횟수를 대폭 줄여 서버 부하를 최소화하면서도 실시간 데이터를 유지할 수 있었습니다.",
        "사용자 경험이 크게 향상되어 페이지 로딩 시간이 거의 없을 정도로 빨라졌고, 부드러운 UI 전환으로 더 나은 사용자 경험을 제공하게 되었습니다."
      ]
    }
  ],
  myJobs: [
    {
      description:
        "Next.js 와 TanStack Query 를 활용하여 SSR 을 적용한 페이지 구현",
      img: ""
    },
    {
      description: "React Hook Form 을 활용 가능한 공통 인풋 컴포넌트 구현",
      img: ""
    },
    { description: "해시 태그를 추가하는 인풋 구현", img: "" }
  ]
};

export const ROLLING: Project = {
  name: "Rolling",
  role: "프론트엔드",
  team: ["프론트엔드 4명"],
  period: "2023.12 - 2023.12",
  address: "https://fluffy-shortbread-07838a.netlify.app/",
  gitRepo: " https://github.com/codeit-sprint2-team-12/team-12-rolling",
  skills: [
    "Javascript",
    "React",
    "React Router",
    "Axios",
    "emoji-picker-react",
    "styled-components"
  ],
  pointDescriptions: [
    "추억의 롤링 페이퍼를 웹 상에서도 간편하게 즐길 수 있는 플랫폼"
  ],
  logo: "/icons/rolling-logo.svg",
  textLogo: "/icons/rolling-text-logo.svg",
  // troubleShootings: [
  //   {
  //     title: "",
  //     problemSituation: "",
  //     process: [],
  //     result: []
  //   }
  // ],
  myJobs: [
    {
      description:
        "emoji-picker-react 를 활용한 이모티콘 리스트 구현 및 최적화",
      img: ""
    },
    {
      description:
        "레이아웃에서 큰 차이가 없는 페이지를 props를 활용하여 코드를 단순화",
      img: "/images/rolling/rolling-prop.png"
    },
    {
      description:
        "공통으로 사용되는 컴포넌트를 최대한 세분화하여 재사용성을 높임",
      img: ""
    }
  ]
};
export const PROJECTS: Project[] = [
  WHIPLASH,
  BINDER,
  GLOBAL_NOMAD,
  TASKIFY,
  ROLLING
];
