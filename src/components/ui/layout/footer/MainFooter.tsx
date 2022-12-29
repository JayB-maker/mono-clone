
const MainFooter = () => {
  return (
    <div>MainFooter</div>
  )
}

export default MainFooter
// import { footerContents } from "../../../../data/Data";
// import { Card, LinkText, TitleText, white } from "../../styles";

// const MainFooter = () => {
//   return (
//     <>
//       <Card flex justifycontent="space-between">
//         {footerContents.map((item) => (
//           <Card
//             key={item.id}
//             width="160px"
//             flex
//             flexdirection="column"
//             gap="24px"
//           >
//             <TitleText
//               color="rgba(255, 255, 255, 0.4)"
//               weight="500"
//               size="16px"
//               lineheight="19px"
//             >
//               {item.heading}
//             </TitleText>
//             <Card flex flexdirection="column" gap="16px">
//               {item.details.map((subitem) =>
//                 subitem.link === true ? (
//                   <a
//                     href={subitem.path}
//                     target="_blank"
//                     key={subitem.id}
//                     style={{
//                       color: `${white}`,
//                       fontWeight: "400",
//                       fontSize: "16px",
//                       textDecoration: "none",
//                       lineHeight: "19px",
//                     }}
//                   >
//                     {subitem.handle}
//                   </a>
//                 ) : (
//                   <LinkText
//                     to={subitem.path}
//                     key={subitem.id}
//                     color={white}
//                     weight="400"
//                     size="16px"
//                     lineheight="19px"
//                   >
//                     {subitem.handle}
//                   </LinkText>
//                 )
//               )}
//             </Card>
//           </Card>
//         ))}
//       </Card>
//     </>
//   );
// };

// export default MainFooter;
