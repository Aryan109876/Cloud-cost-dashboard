export interface CloudProvider {
  id: string;
  name: string;
  color: string;
  spend: number;
  change: number;
}

export interface Resource {
  id: string;
  name: string;
  type: string;
  provider: string;
  region: string;
  cost: number;
  utilization: number;
  status: 'active' | 'idle' | 'underutilized';
  recommendations?: string[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  savings: number;
  effort: 'low' | 'medium' | 'high';
  category: string;
  priority: number;
  resourcesAffected: number;
}

export interface CostData {
  date: string;
  aws: number;
  azure: number;
  gcp: number;
  total: number;
}

export const mockProviders: CloudProvider[] = [
  { id: 'aws', name: 'AWS', color: '#FF9900', spend: 8245, change: 15 },
  { id: 'azure', name: 'Azure', color: '#0078D4', spend: 3127, change: -8 },
  { id: 'gcp', name: 'Google Cloud', color: '#4285F4', spend: 1475, change: 22 }
];

export const mockResources: Resource[] = [
  {
    id: 'ec2-i-1234567890abcdef0',
    name: 'web-server-prod-01',
    type: 'EC2 Instance',
    provider: 'AWS',
    region: 'us-east-1',
    cost: 247.80,
    utilization: 15,
    status: 'underutilized',
    recommendations: ['Consider downsizing to t3.medium', 'Enable auto-scaling']
  },
  {
    id: 'vm-prod-web-02',
    name: 'database-replica-vm',
    type: 'Virtual Machine',
    provider: 'Azure',
    region: 'East US',
    cost: 892.50,
    utilization: 78,
    status: 'active'
  },
  {
    id: 'gce-compute-instance-1',
    name: 'analytics-worker-01',
    type: 'Compute Engine',
    provider: 'GCP',
    region: 'us-central1',
    cost: 156.30,
    utilization: 5,
    status: 'idle',
    recommendations: ['Schedule shutdown during off-hours', 'Consider preemptible instances']
  }
];

export const mockRecommendations: Recommendation[] = [
  {
    id: 'rec-001',
    title: 'Rightsize Underutilized EC2 Instances',
    description: 'Several EC2 instances are running at less than 20% utilization and can be downsized.',
    savings: 1247,
    effort: 'low',
    category: 'Compute',
    priority: 1,
    resourcesAffected: 8
  },
  {
    id: 'rec-002',
    title: 'Purchase Reserved Instances for Production Workloads',
    description: 'Save up to 72% by purchasing 1-year reserved instances for your stable production workloads.',
    savings: 2890,
    effort: 'medium',
    category: 'Cost Optimization',
    priority: 2,
    resourcesAffected: 15
  },
  {
    id: 'rec-003',
    title: 'Implement Auto-Scaling for Variable Workloads',
    description: 'Enable auto-scaling groups to automatically adjust capacity based on demand.',
    savings: 1567,
    effort: 'high',
    category: 'Automation',
    priority: 3,
    resourcesAffected: 6
  }
];

export const mockCostData: CostData[] = [
  { date: '2024-01-01', aws: 7200, azure: 3400, gcp: 1200, total: 11800 },
  { date: '2024-01-02', aws: 7350, azure: 3250, gcp: 1300, total: 11900 },
  { date: '2024-01-03', aws: 7500, azure: 3100, gcp: 1400, total: 12000 },
  { date: '2024-01-04', aws: 7800, azure: 3200, gcp: 1350, total: 12350 },
  { date: '2024-01-05', aws: 8000, azure: 3300, gcp: 1450, total: 12750 },
  { date: '2024-01-06', aws: 8200, azure: 3150, gcp: 1500, total: 12850 },
  { date: '2024-01-07', aws: 8245, azure: 3127, gcp: 1475, total: 12847 }
];

export const mockAnomalies = [
  {
    id: 'anomaly-001',
    title: 'Unusual Spike in Data Transfer Costs',
    description: 'AWS data transfer costs increased by 340% compared to baseline',
    severity: 'high',
    impact: '$1,247',
    detectedAt: '2024-01-07T10:30:00Z',
    affectedService: 'AWS CloudFront'
  },
  {
    id: 'anomaly-002',
    title: 'New High-Cost VM Instances Detected',
    description: 'Several new Premium_LRS VMs were provisioned without approval',
    severity: 'medium',
    impact: '$892',
    detectedAt: '2024-01-06T15:45:00Z',
    affectedService: 'Azure Virtual Machines'
  }
];