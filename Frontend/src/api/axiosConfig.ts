import axios from 'axios';

// 1. تحديد الرابط الأساسي للـ Backend لكي لا تكرره في كل مكان
axios.defaults.baseURL = 'http://localhost:5000';
 
axios.defaults.withCredentials = true;
// 2. إعداد الـ Request Interceptor
axios.interceptors.request.use(
  (config) => {
    // سحب التوكن من الـ LocalStorage
    const token = localStorage.getItem('accessToken');
    
    // إذا كان التوكن موجوداً، نقوم بحقنه داخل الـ Authorization Header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    // في حال حدوث خطأ قبل إرسال الطلب
    return Promise.reject(error);
  }
);

export default axios;