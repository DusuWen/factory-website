import React from 'react';
export const Nav21DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children:
      'https://res.cloudinary.com/drlouie/image/upload/v1572163474/factory-test/%E6%9C%AA%E6%A0%87%E9%A2%98-2_azpege.png',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'Banner0_1',
        to: 'Banner0_1',
        children: '首页',
        className: 'menu-item',
      },
      {
        name: 'Feature4_0',
        to: 'Feature4_0',
        children: '公司介绍',
        className: 'menu-item',
      },
      {
        name: 'Content0_0',
        to: 'Content0_0',
        children: '精选产品',
        className: 'menu-item',
      },
      {
        name: 'Content5_0',
        to: 'Content5_0',
        children: '厂房设备',
        className: 'menu-item',
      },
      {
        name: 'Content3_0',
        to: 'Content3_0',
        children: '专业优势',
        className: 'menu-item',
      },
      {
        name: 'Teams1_0',
        to: 'Teams1_0',
        children: '联系我们',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  menuLink: { children: [] },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0 k24fclz6j2m-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper k24owmtfl3p-editor_css' },
  title: {
    className: 'banner0-title k24ovv3me0o-editor_css',
    children: (
      <>
        <p>海城良润建材科技有限公司</p>
      </>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <>
        <p>
          以顾客要求为基础，以专业可靠为中心，以诚信履约为法则，以持续改进为先导
        </p>
      </>
    ),
  },
  button: {
    className: 'banner0-button k26zqyai7ws-editor_css',
    children: (
      <>
        <p>
          <br />
        </p>
      </>
    ),
    type: 'default',
    href: '',
    target: '',
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>集开采、生产、加工、销售于一体</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>
              海城良润建材科技有限公司位于辽宁省海城市，以丰富的白云石矿产资源而闻名，交通便利，地理位置优越。自有矿山手续齐全，矿山储量极大，白云石品质优良。
            </p>
          </>
        ),
      },
    ],
  },
  img: {
    children:
      'https://res.cloudinary.com/drlouie/image/upload/v1571906074/factory-test/WechatIMG14_lojylj.jpg',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://res.cloudinary.com/drlouie/image/upload/v1572162932/factory-test/%E7%85%A4%E7%82%AD%E5%BC%80%E9%87%87_gmuf31.svg',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <>
              <p>开采</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>自有矿山手续齐全，矿山储量极大，白云石品质优良</p>
            </>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://res.cloudinary.com/drlouie/image/upload/v1572162888/factory-test/%E7%94%9F%E4%BA%A7%E7%AE%A1%E7%90%86_p89hwb.svg',
        },
        title: {
          className: 'content6-title',
          children: (
            <>
              <p>生产和加工</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>进口生产工艺技术从原材料到产品保障品质质量</p>
            </>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://res.cloudinary.com/drlouie/image/upload/v1572162824/factory-test/%E5%B7%A5%E5%8E%82_ak8cpk.svg',
        },
        title: {
          className: 'content6-title',
          children: (
            <>
              <p>设备先进</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>进口制砂设备，进口筛分机械</p>
            </>
          ),
        },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>精选产品</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://cbu01.alicdn.com/img/ibank/2015/367/556/2255655763_1289638920.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>彩砂</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>永久染色彩砂色彩牢固、持久、不褪色</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571932101756&di=d2e12d89694ddb690481a55d456b8f1a&imgtype=0&src=http%3A%2F%2Fcmsimgshow.zhuchao.cc%2F24456%2F20151225103229.jpg%3Fp',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>石英砂</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>良好的耐酸耐高温，适用与不同地域</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571932135445&di=b4ad87a8e865b9f374ffeef36ce01b62&imgtype=0&src=http%3A%2F%2Fimg.jdzj.com%2FUserDocument%2F2014d%2Fqymx123%2FPicture%2F2015114105532.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>钙粉</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>颗粒小，含量高</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>厂房设备</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>
              <br />
            </p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG16_dlk2l5.jpg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG15_hqoyed.jpg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1571906074/factory-test/WechatIMG14_lojylj.jpg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG16_dlk2l5.jpg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://mmbiz.qpic.cn/mmbiz_png/tX2ibGA82YNchLKpYPVXgmasZAWVJ0vZEiayMicF4wKuGibWdB5LophYjadvsBv4FvyBibIy1YX8aicSSrUxniapLGorA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG15_hqoyed.jpg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1571906074/factory-test/WechatIMG14_lojylj.jpg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1571906075/factory-test/WechatIMG16_dlk2l5.jpg',
          },
          content: { children: 'Ant Motion' },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: {
    className: 'home-page-wrapper content3-wrapper k24fk3vf8yf-editor_css',
  },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>专业优势</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>质量检测设备，进口生产工艺技术</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1572350582/factory-test/04_ttbcfr.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>种类丰富</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>提供汉白玉砂、天然彩砂、石英砂、雪花白等，年产量达十万吨</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1572350583/factory-test/07_yxrrt5.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>制砂设备</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>第三代制砂设备出料顺畅、运行可靠、高效节能，产量功效更高</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1572350582/factory-test/06_dqampf.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>研磨设备</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>选用进口设备保证成品率，品质更好</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1572350582/factory-test/03_foh07g.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>检测设备</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  完善齐全的检测设备保证成品品质符合相关标准，满足客户多种需求
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1572350582/factory-test/02_kvmnoy.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>化工环保</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>在生产过程中时刻注意化学品使用，不对环境造成破坏和污染</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://res.cloudinary.com/drlouie/image/upload/v1572350582/factory-test/01_vqrk6p.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>安全防护</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>拥有完整的安全规范条例，时刻注意工厂与工人的安全保护</p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>联系我们</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image k2bt324qgi8-editor_css',
              children:
                'https://res.cloudinary.com/drlouie/image/upload/v1572272329/factory-test/%E7%94%B5%E8%AF%9D_xk0hf0.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <>
                  <p>联系电话</p>
                </>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job k2aied0zvc-editor_css',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <>
                  <h2>
                    0412-3351122<br />0412-3352002
                  </h2>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image k2bt3ovaq4-editor_css',
              children:
                'https://res.cloudinary.com/drlouie/image/upload/v1572272335/factory-test/%E9%82%AE%E4%BB%B6_Email_%E9%82%AE%E7%AE%B1_phyxs2.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <>
                  <p>企业邮箱</p>
                </>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job k2aiejdv5c-editor_css',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <>
                  <h2>hclrjc@163.com</h2>
                  <p>
                    <br />
                  </p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image k2bt3tdde1-editor_css',
              children:
                'https://res.cloudinary.com/drlouie/image/upload/v1572272344/factory-test/%E6%89%8B%E6%9C%BA%E8%90%A5%E9%94%80_%E6%89%8B%E6%9C%BA%E8%B5%9A%E9%92%B1_%E6%89%8B%E6%9C%BA%E6%9F%A5%E8%B4%A6_j9kjue.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <>
                  <p>手机号码</p>
                </>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job k2aieml1kzl-editor_css',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content k2aih5ydoeo-editor_css',
              children: (
                <>
                  <h2>18604207722</h2>
                  <h2>13998015168</h2>
                  <p>
                    <br />
                  </p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Footer11DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://res.cloudinary.com/drlouie/image/upload/v1572163474/factory-test/%E6%9C%AA%E6%A0%87%E9%A2%98-2_azpege.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <>
                  <p>
                    Hai cheng LiangRun Construction Materials echnology Co.,Ltd.
                  </p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <>
                  <p>汉白玉砂</p>
                </>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <>
                  <p>天然彩砂</p>
                </>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <>
                  <p>石英砂</p>
                </>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <>
                  <p>雪花白</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <>
              <p>优势</p>
            </>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <>
                  <p>先进设备</p>
                </>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <>
                  <p>进口工艺</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <>
              <p>理念</p>
            </>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <>
                  <p>以客户要求为基础</p>
                </>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <>
                  <p>以专业可靠为中心</p>
                </>
              ),
            },
            {
              name: 'content~k2aiz209ls',
              className: '',
              children: (
                <>
                  <p>以诚信履约为法则</p>
                </>
              ),
            },
            {
              name: 'content~k2aiznf86q',
              className: '',
              children: (
                <>
                  <p>以持续改进为先导</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>©2019 by 良润建材&nbsp;All Rights Reserved</span>
      </>
    ),
  },
};
