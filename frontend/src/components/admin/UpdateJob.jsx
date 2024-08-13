import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { JOB_API_END_POINT } from "../utils/constant.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetJobById from "@/hooks/useGetJobById";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";

const UpdateJob = () => {
  const params = useParams();
  useGetJobById(params.id);
  //  useGetAllCompanies();
  //    console.log(job);
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    // companyId: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { singleJob } = useSelector((store) => store.job);
  // console.log(singleJob);
  // const { companies } = useSelector(store => store.company);
  // console.log(companies);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const selectChangeHandler = (value) => {
  //     const selectedCompany = companies.find((company)=> company.name.toLowerCase() === value);
  //     setInput({...input, jobId:selectedCompany._id});
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("requirements", input.requirements);
    formData.append("salary", input.salary);
    formData.append("location", input.location);
    formData.append("jobType", input.jobType);
    formData.append("experience", input.experience);
    formData.append("position", input.position);
    // formData.append("companyId",input.companyId);
    // console.log(formData);
    try {
      setLoading(true);
      const res = await axios.put(
        `${JOB_API_END_POINT}/update/${params.id}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials:true
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
      console.log(res);
      // console.log(formData);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      title: singleJob.title || "",
      description: singleJob.description || "",
      requirements: singleJob.requirements || "",
      salary: singleJob.salary || "",
      location: singleJob.location || "",
      jobType: singleJob.jobType || "",
      experience: singleJob.experienceLevel || "",
      position: singleJob.position || "",
      // companyId:singleJob.companyId || ""
    });
  }, [singleJob]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        {/* onSubmit = {submitHandler} */}
        <form
          onSubmit={submitHandler}
          className="p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md"
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-5 p-8">
              <Button
                onClick={() => navigate("/admin/jobs")}
                variant="outline"
                className="flex items-center  text-gray-500 font-semibold"
              >
                <ArrowLeft />
                <span>Back</span>
              </Button>
            </div>

              <div className="flex item-center p-10">
              <h1 className="font-bold text-xl flex item-center">Job Setup</h1>
              </div>
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Experience Level</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>No of Postion</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            {/* {
                            companies.length > 0 && (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                companies.map((company) => {
                                                    return (
                                                        <SelectItem value={company?.name?.toLowerCase()}>{company.name}</SelectItem>
                                                    )
                                                })
                                            }

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )
                        } */}
          </div>
          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Update Job
            </Button>
          )}
          {/* {
                    companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>*Please register a company first, before posting a jobs</p>
                }  */}
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
