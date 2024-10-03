export default {
    logo: <div style={{"paddingLeft": "47px", "lineHeight": "38px", "background": "url('https://i.imgur.com/dV3Q9Pl.png') no-repeat left", "backgroundSize": "36px", "fontWeight": "550"}}>88Studio</div>,
    project: {
      link: 'https://github.com/harbiyelidev/88studio-docs'
    },
    useNextSeoProps() {
      return {
        titleTemplate: "%s - 88Studio Docs",
      }
    },
    chat: {
      link: 'https://discord.gg/88studio'
    },
    banner: {
        key: '88studio-discount',
        dismissible: false,
        text: (
          <a href="https://shop.88studio.store" target="_blank">
            🎉 20% Discount on all products →
          </a>
        )
    },
    sidebar: {
        toggleButton: false
    },
    navigation: {
        prev: true,
        next: true,
    },
    feedback: {
        useLink() {
            return 'https://discord.gg/88studio'
        }
    },
    footer: {
        content: (
            <span>
                Copyright © 88Studio 2024. All Rights Reserved.
            </span>
        )
      }
}