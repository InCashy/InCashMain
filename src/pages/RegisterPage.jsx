
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { DollarSign, UserPlus } from 'lucide-react';

const RegisterPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Registration Not Implemented",
      description: "This is a demo. Actual registration functionality will be added soon! 🚀",
    });
  };

  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/3617ea5a-eae1-45eb-99f3-be8cf107e035/eaf51401e2e4157b5a48dfe673a32850.png";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 p-10 bg-white shadow-2xl rounded-xl"
      >
        <div>
          <Link to="/" className="flex justify-center mb-6">
            <img src={logoUrl} alt="InCashy Logo" className="w-8 h-8 rounded-lg object-contain" />
          </Link>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            Create your InCashy Account
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="mt-1"
                placeholder="John Doe"
              />
            </div>
             <div className="pt-4">
              <Label htmlFor="email-address">Email address</Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
                placeholder="you@example.com"
              />
            </div>
            <div className="pt-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1"
                placeholder="•••••••• (min. 8 characters)"
              />
            </div>
             <div className="pt-4">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-start pt-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <Label htmlFor="terms" className="font-normal text-gray-700">
                I agree to the{' '}
                <Link to="#" onClick={() => toast({ title: "🚧 Feature not implemented yet!"})} className="font-medium text-green-600 hover:text-green-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" onClick={() => toast({ title: "🚧 Feature not implemented yet!"})} className="font-medium text-green-600 hover:text-green-500">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>
          </div>


          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <UserPlus className="h-5 w-5 text-green-300 group-hover:text-green-100" aria-hidden="true" />
              </span>
              Create Account
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
