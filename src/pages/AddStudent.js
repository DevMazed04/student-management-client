import React from 'react';
import { Link } from 'react-router-dom';

const AddStudent = () => {
  return (
    <div className="pr-7 mt-3">
      <div className='flex justify-between'>
        <span className='font-bold'>Add Student </span>
        <span className='font-[400]'>25 July 2022 16:10 </span>
      </div>

      <div className="w-full mt-7">
        <div className="">

          <div className='grid grid-cols-3 gap-3'>
            <div className="form-control">
              <input type="text" placeholder="First Name" className="input input-bordered" />
            </div>

            <div className="form-control">
              <input type="text" placeholder="Middle Name" className="input input-bordered" />
            </div>

            <div className="form-control">
              <input type="text" placeholder="Last Name" className="input input-bordered" />
            </div>

            <div className="form-control">
              <select className="select select-bordered opacity-70">
                <option disabled selected className=''>Select Class</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>

            <div className="form-control">
              <select className="select select-bordered opacity-70">
                <option disabled selected className=''>Select Division</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
              </select>
            </div>

            <div className="form-control">
              <input type="text" placeholder="Enter Roll Number in Digits" className="input input-bordered" maxLength="2" />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3 mt-8'>
            <div className="form-control">
              <textarea className="textarea textarea-bordered h-4" placeholder="Address Line 1"></textarea>
            </div>
            <div className="form-control">
              <textarea className="textarea textarea-bordered h-4" placeholder="Address Line 2"></textarea>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-3 mt-3'>
            <div className="form-control">
              <input type="text" placeholder="Landmark" className="input input-bordered" />
            </div>

            <div className="form-control">
              <input type="text" placeholder="City" className="input input-bordered" />
            </div>

            <div className="form-control">
              <input type="text" placeholder="Pincode" className="input input-bordered" maxLength="6" />
            </div>
          </div>

          <div className="form-control mt-5">
            <button className="btn border-0 bg-red-500 w-[30%]">Add Student</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;