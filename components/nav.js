import React from 'react'

const links = [
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/iletisim', label: 'İletişim' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <div>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key} >
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
    <style jsx>{`
        div{
          padding: 8px;
          margin: 24px 0;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #333;
        }
        
        li {
          float: left;
        }
        
        li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }
        
        li a:hover:not(.active) {
          background-color: #111;
        }
      `}</style>
  </div>
)

export default Nav
