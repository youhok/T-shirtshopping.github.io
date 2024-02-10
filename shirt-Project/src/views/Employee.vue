<template>
    <!-- main content page -->
    <div class="container mt-4">
      <label for="inputname" class="form-label">Name</label>
      <div class="mb-3">
        <input
          type="text"
          name="inputname"
          v-model="student.name"
          class="form-control"
        />
      </div>
      <label class="form-label">Gender</label>
      <select
        v-model="student.gender"
        id="currency"
        name="currency"
        class="form-select"
      >
        <option>Male</option>
        <option>Female</option>
      </select>
  
      <label for="inputphone" class="form-label">Phone</label>
      <input
        type="number"
        v-model="student.phone"
        name="inputphone"
        class="form-control"
      />
  
      <div class="mb-3">
        <label class="form-label">Address</label>
        <textarea
          rows="4"
          v-model="student.address"
          name="comment"
          id="comment"
          class="form-control"
        ></textarea>
      </div>
  
      <!-- button -->
      <button class="btn btn-primary" @click="saveOrUpdate">
        {{ isUpdateMode ? "Update" : "Submit" }}
      </button>
  
      <!-- table -->
      <table class="table mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name member</th>
            <th>Gender</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in studentList" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.phone }}</td>
            <td>{{ student.address }}</td>
            <td>
              <button @click="edit(student)" class="btn btn-warning me-2">
                Edit
              </button>
              <button @click="remove(index)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const student = ref({
    id: "",
    name: "",
    gender: "",
    phone: "",
    address: "",
  });
  
  const studentList = ref([]);
  const isUpdateMode = ref(false);
  let selectedIndex = null;
  
  const saveOrUpdate = () => {
    if (isUpdateMode.value) {
      studentList.value[selectedIndex] = { ...student.value };
      isUpdateMode.value = false;
    } else {
      student.id = studentList.value.length + 1;
      studentList.value.push({ ...student.value });
    }
  
    student.value = {
      id: "",
      name: "",
      gender: "",
      phone: "",
      address: "",
    };
  };
  
  const edit = (selectedStudent) => {
    student.value = { ...selectedStudent };
    isUpdateMode.value = true;
    selectedIndex = studentList.value.indexOf(selectedStudent);
  };
  
  const remove = (index) => {
    studentList.value.splice(index, 1);
  };
  </script>