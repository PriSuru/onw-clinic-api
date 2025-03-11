// src/api/apiHooks.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from './apiService';

// Fetch data (GET)
export const useFetchData = (endpoint, queryKey, params = {}) =>
  useQuery({
    queryKey,
    queryFn: () => apiService.get(endpoint, params).then((res) => res.data),
    onError: (error) => {
      console.error(`Error fetching data from ${endpoint}:`, error.message);
    },
  });

// Create data (POST)
export const useCreateData = (endpoint, queryKey) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => apiService.post(endpoint, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
    onError: (error) => {
      console.error(`Error creating data at ${endpoint}:`, error.message);
    },
  });
};

// Update data (PUT)
export const useUpdateData = (endpoint, queryKey) => {  
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => apiService.post(`${endpoint}/${id}`, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
    onError: (error) => {
      console.error(`Error updating data at ${endpoint}:`, error.message);
    },
  });
};


// Update data (PUT)
// export const useUpdateData8045 = (endpoint, queryKey) => {  
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ id, data }) => apiService.post8045(`${endpoint}`, data),
//     onSuccess: () => queryClient.invalidateQueries({ queryKey }),
//     onError: (error) => {
//       console.error(`Error updating data at ${endpoint}:`, error.message);
//     },
//   });
// };

// 8045

// // / Fetch data (GET)
// export const useFetchData8045 = (endpoint, queryKey, params = {}) =>
//   useQuery({
//     queryKey,
//     queryFn: () => apiService.get8045(endpoint, params).then((res) => res.data),
//     onError: (error) => {
//       console.error(`Error fetching data from ${endpoint}:`, error.message);
//     },
//   });

// // Create data (POST)
// export const useCreateData8045 = (endpoint, queryKey) => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data) => apiService.post8045(endpoint, data),
//     onSuccess: () => queryClient.invalidateQueries({ queryKey }),
//     onError: (error) => {
//       console.error(`Error creating data at ${endpoint}:`, error.message);
//     },
//   });
// };

// // Update data (PUT)
// export const useUpdateData8045 = (endpoint, queryKey) => {  
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ id, data }) => apiService.post8045(`${endpoint}`, data),
//     onSuccess: () => queryClient.invalidateQueries({ queryKey }),
//     onError: (error) => {
//       console.error(`Error updating data at ${endpoint}:`, error.message);
//     },
//   });
// };







//  // Delete data (DELETE)
// export const useDeleteData = (endpoint, queryKey) => {
//     const queryClient = useQueryClient();
//     return useMutation({
//         mutationFn: (id) => apiService.delete(`${endpoint}/${id}`),
//         onSuccess: () => queryClient.invalidateQueries({ queryKey }),
//         onError: (error) => {
//             console.error(`Error deleting data at ${endpoint}:`, error.message);
//         },
//     });
// };


// //   const queryClient = useQueryClient();
// //   return useMutation({
// //     mutationFn: (id) => apiService.delete(`${endpoint}/${id}`),
// //     onSuccess: () => queryClient.invalidateQueries({ queryKey }),
// //     onError: (error) => {
// //       console.error(`Error deleting data at ${endpoint}:`, error.message);
// //     },
// //   });
// // };
