export default {
  logo: <span>Canyon</span>,
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  banner: {
    content: () => {
      const t = (key) => key

      return (
        <div>
          <p>此文档为携程内部专用，更多请关注
            <a target={'_blank'}
               style={{
                 textDecoration: 'underline'
               }} href="https://docs.canyonjs.org">Canyon开源文档</a>
          </p>
          <p>canyon平台地址：<a
            target={'_blank'}
            style={{
              textDecoration: 'underline'
            }} href="https://canyon.fws.qa.nt.ppppcorp.com">https://canyon.fws.qa.nt.ppppcorp.com</a>，短域名：<a
            target={'_blank'}
            style={{
              textDecoration: 'underline'
            }}
            href="https://canyon.fws.qa.nt.ppppcorp.com">canyon/</a>，如果需要人工服务，请加
            <a target="_blank" rel="noopener noreferrer"
               style={{
                 textDecoration: 'underline'
               }}
               href="https://c.pppp.cn/apk/cchatcp.html?action=openChat&type=groupchat&jid=2243873565533274144">Trippal支持群</a>
          </p>
        </div>
      )
    },
  }
}
