# 🚀 Deploy to Vercel - Complete Guide

## 📋 Prerequisites

1. **GitHub Repository**: Your code is already pushed to https://github.com/faysal2572/Portfolio.git ✅
2. **Vercel Account**: Sign up at https://vercel.com using your GitHub account
3. **MongoDB Atlas**: Set up a free MongoDB cluster at https://cloud.mongodb.com

## 🔧 Step 1: Set up MongoDB Atlas

1. Go to https://cloud.mongodb.com and create a free account
2. Create a new cluster (select M0 Sandbox - Free tier)
3. Create a database user:
   - Go to Database Access → Add New Database User
   - Username: `portfolio_user`
   - Password: Generate a secure password (save it!)
4. Set up Network Access:
   - Go to Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
5. Get your connection string:
   - Go to Database → Connect → Connect your application
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

## 🚀 Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Import Project**: Click "New Project" → Import Git Repository
3. **Select Repository**: Choose `faysal2572/Portfolio`
4. **Configure Project**:
   - Framework Preset: Other
   - Root Directory: `./` (leave default)
   - Build Command: `npm run vercel-build`
   - Output Directory: `client/build`
   - Install Command: `npm install`

5. **Environment Variables**: Click "Environment Variables" and add:
   ```
   MONGODB_URI = mongodb+srv://portfolio_user:YOUR_PASSWORD@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   NODE_ENV = production
   EMAIL_USER = your-email@gmail.com (optional for contact form)
   EMAIL_PASS = your-app-password (optional for contact form)
   ```

6. **Deploy**: Click "Deploy" button

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project root**:
   ```bash
   cd "/home/asd/Desktop/New Folder/portfolio"
   vercel
   ```

4. **Follow prompts**:
   - Link to existing project? No
   - Project name: faysal-portfolio
   - Deploy? Yes

5. **Set Environment Variables**:
   ```bash
   vercel env add MONGODB_URI
   vercel env add NODE_ENV
   ```

## ⚙️ Step 3: Configure Environment Variables

In Vercel Dashboard → Your Project → Settings → Environment Variables, add:

| Name | Value | Environment |
|------|-------|-------------|
| `MONGODB_URI` | `mongodb+srv://portfolio_user:PASSWORD@cluster.mongodb.net/portfolio` | Production |
| `NODE_ENV` | `production` | Production |
| `EMAIL_USER` | `your-email@gmail.com` | Production (Optional) |
| `EMAIL_PASS` | `your-app-password` | Production (Optional) |

## 🔍 Step 4: Verify Deployment

1. **Check Build Logs**: Monitor the deployment process in Vercel dashboard
2. **Test Your Site**: Visit your deployed URL (e.g., `https://your-project.vercel.app`)
3. **Test API Endpoints**:
   - Portfolio data: `https://your-project.vercel.app/api/portfolio`
   - Health check: `https://your-project.vercel.app/api/health`
   - Resume download: `https://your-project.vercel.app/api/download/resume`

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json
   - Run `npm run vercel-build` locally first

2. **API Not Working**:
   - Verify environment variables are set correctly
   - Check MongoDB connection string
   - Ensure serverless functions are in correct directory structure

3. **MongoDB Connection Error**:
   - Verify connection string format
   - Check network access settings in MongoDB Atlas
   - Ensure database user has correct permissions

### Quick Fixes:

```bash
# If deployment fails, try:
vercel --prod

# To check logs:
vercel logs

# To redeploy:
git add .
git commit -m "fix: deployment updates"
git push origin master
# Vercel will auto-deploy on push
```

## 🎉 Success!

Your MERN stack portfolio is now live on Vercel! 

- **Frontend**: Served via Vercel's CDN
- **Backend**: Running as serverless functions
- **Database**: MongoDB Atlas cloud database
- **Domain**: Custom .vercel.app subdomain (upgradeable to custom domain)

## 📈 Next Steps

1. **Custom Domain**: Add your own domain in Vercel dashboard
2. **Analytics**: Enable Vercel Analytics for performance insights
3. **Monitoring**: Set up error tracking and performance monitoring
4. **SEO**: Add meta tags and optimize for search engines

Your portfolio is now production-ready and globally accessible! 🌍