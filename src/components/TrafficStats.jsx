import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrafficStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/traffic-stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching traffic stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1>Traffic Statistics</h1>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            Source: {stat.source}, Count: {stat.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficStats;
