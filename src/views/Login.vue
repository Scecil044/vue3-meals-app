<template>
  <div class="flex bg-gray-100 h-full items-center">
    <div class="flex flex-col bg-white shadow-xl w-[450px] mx-auto p-3">
      <form action="" class="text-center">
        <h1 class="text-black font-semibold text-lg">Login to your account</h1>
        <p>or</p>
        <a href="#" class="text-green-600 hover:text-green-700"
          >Create a new one</a
        >

        <div class="mb-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full border-gray-300 focus:border-b focus:ring-0 focus:outline-none border-b-2 border-transparent focus:border-blue-500"
            required
          />
        </div>

        <div class="mb-4">
          <input
            type="password"
            placeholder="Password"
            class="w-full border-gray-300 focus:border-b focus:ring-0 focus:outline-none border-b-2 border-transparent focus:border-blue-500"
            required
          />
        </div>

        <div class="mb-2">
          <div class="flex items-center gap-2 justify-center">
            <input type="checkbox" class="text-indigo-800" />
            Remember me?
          </div>
        </div>

        <button
          class="bg-indigo-800 text-white py-2 px-3 shadow-md w-full hover:bg-indigo-700 active:bg-indigo-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
