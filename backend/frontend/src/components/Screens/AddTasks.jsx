import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../../Config/Config";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import Select from "react-select";

function AddTasks() {
  const [selectedOption, setSelectedOption] = useState();
  const handleChangesd = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const navigate = useNavigate();
  const [volunteers, setVolunteers] = useState([]);

  const op = volunteers.map((ele) => {
    return {
      value: ele._id,
      label: ele.name,
      ...ele,
    };
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPrevewImage] = useState(null);

  const Id = useParams().id;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    let role = adminInfo?.userExist?.role === 0;
    // let managerRole = adminInfo?.userExist?.role === 1;
    if (role) {
      if (!adminInfo) {
        navigate("/");
      }
      if (adminProfileError) {
        localStorage.removeItem("adminProfileInfo");
        localStorage.removeItem("adminInfo");
        navigate("/");
      }
    } else {
      if (!adminInfo) {
        navigate("/managerLogin");
      }
      if (adminProfileError) {
        localStorage.removeItem("adminProfileInfo");
        localStorage.removeItem("adminInfo");
        navigate("/managerLogin");
      }
    }
  }, [adminProfileError, adminInfo, navigate]);

  const volunteerAssignForTask = selectedOption?.map((one) => one && one?._id);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("task", name);
      formData.append("volunteerAssignForTask", volunteerAssignForTask);

      await baseUrl
        .put(`/api/mission/addTasks?id=${Id}`, formData)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 200) {
            setImage();
            setName("");
            setSelectedOption(null);
            // navigate();
            window.location.reload(`/addTasks/${Id}`);
            toast.success("Task created successfully", toastOptions);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    baseUrl
      .get(`api/volunteer/allVoulentaries`, {
        headers: {
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        return setVolunteers(res.data.body.allVoulentaries);
      })
      .catch((err) => console.log(err));
  }, [adminInfo]);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPrevewImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Add Tasks</h4>
        </div>
        <div className="card-body mt-5 text-start  bg-white">
          <form>
            <label class="form-label" for="formBasicPassword">
              Task
            </label>

            <input
              className="form-control form-control-lg form-control mb-3"
              type="text"
              value={name}
              placeholder="Add task details"
              onChange={(e) => setName(e.target.value)}
            />

            <img
              src={previewImage}
              alt=""
              style={{ height: "100px" }}
              className="mb-3"
            />

            <input
              type="file"
              onChange={(e) => onImageChange(e)}
              className="mb-4 mx-2"
              accept="image/*"
            />

            {/* <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="mb-4"
              accept="image/*"
            /> */}

            <div>
              <label class="form-label w-100" for="formBasicPassword">
                Assign task to Volunter
              </label>
              <Select
                value={selectedOption}
                onChange={handleChangesd}
                options={op}
                isMulti
              />
            </div>

            <div className="mt-3">
              <Button
                type="button"
                className="btn btn-primary px-4"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                type="button"
                className="btn btn-primary mx-3 px-4"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </div>

            {/* multi select */}

            {/* <FormControl className={classes.formControl}>
              <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
              <Select
                labelId="mutiple-select-label"
                multiple
                value={selected}
                onChange={handleChange}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                <MenuItem
                  value="all"
                  classes={{
                    root: isAllSelected ? classes.selectedAll : '',
                  }}
                >
                  <ListItemIcon>
                    <Checkbox
                      classes={{ indeterminate: classes.indeterminateColor }}
                      checked={isAllSelected}
                      indeterminate={
                        selected.length > 0 &&
                        selected.length < volunteers.length
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.selectAllText }}
                    primary="Select All"
                  />
                </MenuItem>
                {volunteers.map((option) => (
                  <MenuItem key={option._id} value={option.name}>
                    <ListItemIcon>
                      <Checkbox checked={selected.indexOf(option) > -1} />
                    </ListItemIcon>
                    <ListItemText primary={option.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTasks;

// const handleSumit = async (e) => {
//     e.preventDefault();

//       let taskdata = [];
//       inputFields.map((e) => {
//         taskdata.push(e.tasks);
//       });
//       data.tasks = taskdata;
//       await baseUrl
//         .post('/api/mission/createMission', data, {
//           headers: {
//             Authorization: `Bearer ${adminInfo?.token}`,
//           },
//         })
//         .then((res) => {
//           if (res.data.status === 201) {
//             navigate('/allTasks');
//             toast.success('Event cretaed Successfully', toastOptions);
//           }
//         })
//         .catch((err) => {
//           console.log(err, '======================err');
//           toast.error(err.response.data.message, toastOptions);
//         });
//   };
