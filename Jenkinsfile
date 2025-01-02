pipeline {
    agent any

    environment {
        NODE_ENV = 'production' // Set the environment for Node.js
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                git branch: 'main', url: 'https://github.com/Uday0458/my-nodejs.git'
            }
        }

        stage('Build with Maven') {
            steps {
                echo 'Building with Maven...'
                withMaven(maven: 'Maven-3.8.6') { // Replace with your Maven installation name in Jenkins
                    sh 'mvn clean install'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Node.js tests...'
                sh 'npm test'
            }
        }

        stage('Build Node.js App') {
            steps {
                echo 'Building Node.js application...'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh '''
                # Example of deployment script
                pm2 stop all || true
                pm2 start dist/app.js --name "nodejs-app"
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment was successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
