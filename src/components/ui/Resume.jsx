import React from "react";
import CopyButton from "../shared/CopyButton";

const applicant = {
  applicant_information: {
    applicant_name: "RIFAT SANTO",
    applicant_name_bn: "রিফাত শান্ত",
    father_name: "SAIFULLAH",
    father_name_bn: "ছাইফূল্লাহ",
    mother_name: "BILKIS BEGUM",
    mother_name_bn: "বিলকিস বেগম",
    date_of_birth: "9 Mar 1999",
    nationality: "Bangladeshi",
    nid: "6904095970",
    passport: "EF 0712389",
    email: "inbox.santo@gmail.com",
    religion: "Islam",
    gender: "Male",
    marital_status: "Single",
    quota: "None",
    departmental_status: "None",
    phone: "01307230077"
  },
  care_of: {
    name: "SAIFULLAH",
    address: {
      village: "Adipoit",
      sub_district: "Melandah",
      district: "Jamalpur",
      division: "Mymensingh",
      postal_code: "2010"
    }
  },
  education: {
    ssc_equivalent: {
      examination: "SSC",
      roll_no: "181805",
      group_subject: "Science",
      board: "Dhaka",
      result: "4.83",
      passing_year: "2015"
    },
    hsc_equivalent: {
      examination: "HSC",
      roll_no: "174421",
      group_subject: "Science",
      board: "Dhaka",
      result: "3.50",
      passing_year: "2017"
    },
    graduation_equivalent: {
      examination: "Honors",
      university_institute: "National University",
      subject: "Political Science",
      course_duration: "4 years",
      passing_year: "2021"
    }
  },
  other_qualifications: {
    computer_operation_efficiency: "Efficient",
    type_speed: "Efficient"
  }
};
const ApplicantInfo = () => {
  const Value = ({ text }) => (
    <span className="inline-flex items-center gap-1">
      {text}
      <CopyButton textToCopy={text} />
    </span>
  );

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-2">Applicant Information</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex gap-8 justify-between">
          <div>
            <div className="py-4 shadow-md rounded-md space-y-2">
              <h2 className="font-semibold">
                Name:{" "}
                <Value text={applicant.applicant_information.applicant_name} />{" "}
                <Value
                  text={applicant.applicant_information.applicant_name_bn}
                />
              </h2>
              <p>
                Father's Name:{" "}
                <Value text={applicant.applicant_information.father_name} />{" "}
                <Value text={applicant.applicant_information.father_name_bn} />
              </p>
              <p>
                Mother's Name:{" "}
                <Value text={applicant.applicant_information.mother_name} />{" "}
                <Value text={applicant.applicant_information.mother_name_bn} />
              </p>
              <p>
                Date of Birth:{" "}
                <Value text={applicant.applicant_information.date_of_birth} />
              </p>
              <p>
                Nationality:{" "}
                <Value text={applicant.applicant_information.nationality} />
              </p>
              <p>
                NID: <Value text={applicant.applicant_information.nid} />
              </p>
              <p>
                Passport:{" "}
                <Value text={applicant.applicant_information.passport} />
              </p>
              <p>
                Email: <Value text={applicant.applicant_information.email} />
              </p>
              <p>
                Religion:{" "}
                <Value text={applicant.applicant_information.religion} />
              </p>
              <p>
                Gender: <Value text={applicant.applicant_information.gender} />
              </p>
              <p>
                Marital Status:{" "}
                <Value text={applicant.applicant_information.marital_status} />
              </p>
              <p>
                Phone: <Value text={applicant.applicant_information.phone} />
              </p>
            </div>
            <div className="py-4 shadow-md rounded-md space-y-2">
              <h2 className="font-semibold">Address</h2>
              <p>
                Care of: <Value text={applicant.care_of.name} />
              </p>
              <p>
                Village: <Value text={applicant.care_of.address.village} />
              </p>
              <p>
                Sub District:{" "}
                <Value text={applicant.care_of.address.sub_district} />
              </p>
              <p>
                District: <Value text={applicant.care_of.address.district} />
              </p>
              <p>
                Division: <Value text={applicant.care_of.address.division} />
              </p>
              <p>
                Postal Code:{" "}
                <Value text={applicant.care_of.address.postal_code} />
              </p>
            </div>
          </div>
          <div>
            <div className="sticky right-0 top-0">
              <img
                src="passport-size.jpg"
                alt="Passport Size Photo"
                className="w-full min-w-[280px] max-w-[280px] aspect-square rounded-xl"
              />
              <div className="flex justify-center">
                <a
                  href={"passport-size.jpg"}
                  download
                  className="mt-4 px-2.5 py-1.5 rounded-md bg-blue-500 text-white"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 shadow-md rounded-md">
          <h2 className="font-semibold mb-4">Education</h2>
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-2 border">Exam</th>
                <th className="p-2 border">Roll No</th>
                <th className="p-2 border">Group</th>
                <th className="p-2 border">Result</th>
                <th className="p-2 border">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">SSC</td>
                <td className="p-2 border">
                  <Value text={applicant.education.ssc_equivalent.roll_no} />
                </td>
                <td className="p-2 border">
                  <Value
                    text={applicant.education.ssc_equivalent.group_subject}
                  />
                </td>
                <td className="p-2 border">
                  <Value text={applicant.education.ssc_equivalent.result} />
                </td>
                <td className="p-2 border">
                  <Value
                    text={applicant.education.ssc_equivalent.passing_year}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2 border">HSC</td>
                <td className="p-2 border">
                  <Value text={applicant.education.hsc_equivalent.roll_no} />
                </td>
                <td className="p-2 border">
                  <Value
                    text={applicant.education.hsc_equivalent.group_subject}
                  />
                </td>
                <td className="p-2 border">
                  <Value text={applicant.education.hsc_equivalent.result} />
                </td>
                <td className="p-2 border">
                  <Value
                    text={applicant.education.hsc_equivalent.passing_year}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2 border">Honors</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border">
                  <Value
                    text={applicant.education.graduation_equivalent.subject}
                  />
                </td>
                <td className="p-2 border">-</td>
                <td className="p-2 border">
                  <Value
                    text={
                      applicant.education.graduation_equivalent.passing_year
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="py-4 shadow-md rounded-md space-y-2">
          <h2 className="font-semibold">Other Qualifications</h2>
          <p>
            Computer Operation:{" "}
            <Value
              text={
                applicant.other_qualifications.computer_operation_efficiency
              }
            />
          </p>
          <p>
            Typing Speed:{" "}
            <Value text={applicant.other_qualifications.type_speed} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfo;
