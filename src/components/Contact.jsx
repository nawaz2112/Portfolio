import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Contact = () => (
  <section className="py-8 max-w-3xl mx-auto">
    <h3 className="text-2xl font-semibold mb-4">Contact</h3>
    <div className="space-y-2">
      <p><FaGithub className="inline mr-2"/> <a href="https://github.com/nawaz2112" target="_blank">GitHub</a></p>
      <p><FaLinkedin className="inline mr-2"/> <a href="https://www.linkedin.com/in/nawaz12/" target="_blank">LinkedIn</a></p>
      <p><FaEnvelope className="inline mr-2"/> <a href="mailto:shanawaz.mohd.k@gmail.com">shanawaz.mohd.k@gmail.com</a></p>
      <p><FaFileDownload className="inline mr-2"/> <a href="https://vardhamancoe-my.sharepoint.com/:b:/g/personal/katikamohammedshanawaz22cs_student_vardhaman_org/Eb6PYhiyCCdPp2djiNCT7-EBEW98VHBpXNTTu5qWhCBrMw?e=07ZT0B" target="_blank">Resume</a></p>
    </div>
  </section>
);

export default Contact;
