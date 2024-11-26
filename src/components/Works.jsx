/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({ index, name, description, tags }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <div className="mt-0">
//         <h3 className="text-white font-bold text-[24px]">{name}</h3>
//         <p className="mt-2 text-secondary text-[14px]">{description}</p>
//       </div>

//       <div className="mt-4 flex flex-wrap gap-2">
//         {tags.map((tag) => (
//           <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
//             #{tag.name}
//           </p>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>
          Achievements and Certifications.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-2 text-secondary text-[17px] max-w-3xl leading=[30px]"
        ></motion.p>
      </div>

      <div className="mt-7">
        <table className="table-auto border-collapse border border-orange-400 w-full">
          <thead>
            <tr className="bg-green-400">
              <th className="border border-orange-400 px-4 py-2">S.No.</th>
              <th className="border border-orange-400 px-4 py-2">
                A&C
              </th>
              <th className="border border-orange-400 px-4 py-2">
                Description
              </th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={`project-${index}`} className="hover:bg-green-300">
                <td className="border border-orange-400 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-orange-400 px-4 py-2 text-left">
                  {project.name}
                </td>
                <td className="border border-orange-400 px-4 py-2">
                  {project.description}
                </td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
